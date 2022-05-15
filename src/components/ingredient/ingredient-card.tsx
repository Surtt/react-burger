import React, { FC, ReactNode } from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-card.module.css";
import cn from "classnames";

interface IIngredientCard {
  image: string;
  name: string;
  price: ReactNode;
  idx: number;
}

const IngredientCard: FC<IIngredientCard> = ({ image, name, price, idx }) => {
  return (
    <div className={styles.ingredientContainer}>
      <div className={cn(styles.cardTop, "pl-4 pr-4")}>
        {idx === 0 && <Counter count={1} size="default" />}
        <img src={image} alt={name} />
        <div className={styles.priceContainer}>
          <p className="text text_type_digits-default mb-1">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <p className={cn(styles.name, "text text_type_main-default")}>{name}</p>
    </div>
  );
};

export default IngredientCard;

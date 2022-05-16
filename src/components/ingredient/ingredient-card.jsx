import React from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-card.module.css";
import cn from "classnames";
import PropTypes from "prop-types";

const IngredientCard = ({ image, name, price, idx }) => {
  return (
    <li className={styles.ingredientContainer}>
      <div className={cn(styles.cardTop, "pl-4 pr-4")}>
        {idx === 0 && <Counter count={1} size="default" />}
        <img src={image} alt={name} />
        <div className={styles.priceContainer}>
          <p className="text text_type_digits-default mb-1">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <p className={cn(styles.name, "text text_type_main-default")}>{name}</p>
    </li>
  );
};

IngredientCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  idx: PropTypes.number.isRequired,
};

export default IngredientCard;

import React, { FC, useMemo, useState } from "react";
import cn from "classnames";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useDrag } from "react-dnd";

import styles from "./ingredient-card.module.css";
import { IIngredient } from "../../types";
import { useSelector } from "../../hooks";

interface IIngredientCard {
  data: IIngredient;
}

const IngredientCard: FC<IIngredientCard> = ({ data }) => {
  const { ingredients, buns } = useSelector((state) => state.ingredients);
  const [, setOpenModal] = useState(false);

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: { id: data._id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const getCounter = useMemo(() => {
    const ingredientByName = ingredients?.find(
      (ingredient: IIngredient) => ingredient.name === data.name
    )?.name;
    const ingredientsAmount = ingredients.filter(
      (ingredient: IIngredient) => ingredient.name === ingredientByName
    ).length;

    return data.name === buns?.name ? 2 : ingredientsAmount;
  }, [ingredients, buns]);

  return (
    <>
      <li
        ref={dragRef}
        onClick={handleOpenModal}
        className={styles.ingredientContainer}
      >
        <div className={cn(styles.cardTop, "pl-4 pr-4")}>
          {getCounter ? <Counter count={getCounter} size="default" /> : null}
          <img src={data.image} alt={data.name} />
          <div className={styles.priceContainer}>
            <p className="text text_type_digits-default mb-1">{data.price}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <p className={cn(styles.name, "text text_type_main-default")}>
          {data.name}
        </p>
      </li>
    </>
  );
};

export default IngredientCard;

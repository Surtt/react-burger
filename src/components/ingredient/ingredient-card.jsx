import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

import {
  ADD_BUNS,
  ADD_INGREDIENT,
  HIDE_INGREDIENT_DETAILS,
  SHOW_INGREDIENT_DETAILS,
} from "../../services/actions/ingredients";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { dataTypes } from "../../utils/dataTypes";
import { useDrag } from "react-dnd";

import styles from "./ingredient-card.module.css";

const IngredientCard = ({ data, idx }) => {
  const dispatch = useDispatch();
  const [isOpenModal, setOpenModal] = useState(false);

  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredient",
    item: { id: data._id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const handleOpenModal = () => {
    setOpenModal(true);

    if (data.type === "bun") {
      console.log(data);
      dispatch({
        type: ADD_BUNS,
        payload: {
          id: data._id,
          image: data.image,
          name: data.name,
          price: data.price,
        },
      });
    } else {
      dispatch({
        type: ADD_INGREDIENT,
        payload: {
          id: data._id,
          image: data.image,
          name: data.name,
          price: data.price,
        },
      });
    }

    dispatch({
      type: SHOW_INGREDIENT_DETAILS,
      payload: {
        id: data._id,
        image: data.image_large,
        name: data.name,
        calories: data.calories,
        proteins: data.proteins,
        fat: data.fat,
        carbohydrates: data.carbohydrates,
      },
    });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    dispatch({ type: HIDE_INGREDIENT_DETAILS });
  };
  return (
    <>
      <li
        ref={dragRef}
        onClick={handleOpenModal}
        className={styles.ingredientContainer}
      >
        <div className={cn(styles.cardTop, "pl-4 pr-4")}>
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
      {isOpenModal && (
        <Modal title="Детали ингредиента" onClose={handleCloseModal}>
          <IngredientDetails data={data} />
        </Modal>
      )}
    </>
  );
};

IngredientCard.propTypes = {
  data: PropTypes.shape(dataTypes).isRequired,
};

export default IngredientCard;

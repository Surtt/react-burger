import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

import {
  ADD_INGREDIENT,
  HIDE_INGREDIENT_DETAILS,
  SHOW_INGREDIENT_DETAILS,
} from "../../services/actions/ingredients";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { dataTypes } from "../../utils/dataTypes";

import styles from "./ingredient-card.module.css";

const IngredientCard = ({ data, idx }) => {
  const [isOpenModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setOpenModal(true);

    dispatch({
      type: ADD_INGREDIENT,
      payload: {
        id: data._id,
        image: data.image,
        name: data.name,
        price: data.price,
      },
    });

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
      <li onClick={handleOpenModal} className={styles.ingredientContainer}>
        <div className={cn(styles.cardTop, "pl-4 pr-4")}>
          {idx === 0 && <Counter count={1} size="default" />}
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

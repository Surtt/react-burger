import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { DataContext } from "../../utils/dataContext";
import { dataTypes } from "../../utils/dataTypes";

import styles from "./ingredient-card.module.css";

const IngredientCard = ({ data, idx }) => {
  const { dispatch } = useContext(DataContext);
  const [isOpenModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
    // временное решение для тренировки useReducer
    if (data.type === "bun") {
      return;
    }
    dispatch({
      type: "addIngredient",
      payload: {
        id: data._id,
        image: data.image,
        name: data.name,
        price: data.price,
      },
    });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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

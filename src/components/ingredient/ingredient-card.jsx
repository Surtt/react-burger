import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

import styles from "./ingredient-card.module.css";

const IngredientCard = ({ image, imageLarge, name, price, idx, ...props }) => {
  const [isOpenModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <li onClick={handleOpenModal} className={styles.ingredientContainer}>
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
      {isOpenModal && (
        <Modal title="Детали ингредиента" onClose={handleCloseModal}>
          <IngredientDetails name={name} {...props} />
        </Modal>
      )}
    </>
  );
};

IngredientCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  idx: PropTypes.number.isRequired,
};

export default IngredientCard;

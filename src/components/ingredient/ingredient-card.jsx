import React from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-card.module.css";
import cn from "classnames";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import { useState } from "react";

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
          <div className={styles.detailIngredientModal}>
            <img src={props.image_large} alt={name} />
            <p className={cn(styles.name, "text text_type_main-medium mt-4")}>
              {name}
            </p>
            <div className={cn(styles.nutrients, "mt-8")}>
              <div className={styles.nutrient}>
                <p className="text text_type_main-default text_color_inactive">
                  Калории,ккал
                </p>
                <p className="text text_type_main-default text_color_inactive">
                  {props.calories}
                </p>
              </div>
              <div className={styles.nutrient}>
                <p className="text text_type_main-default text_color_inactive">
                  Белки, г
                </p>
                <p className="text text_type_main-default text_color_inactive">
                  {props.proteins}
                </p>
              </div>
              <div className={styles.nutrient}>
                <p className="text text_type_main-default text_color_inactive">
                  Жиры, г
                </p>
                <p className="text text_type_main-default text_color_inactive">
                  {props.fat}
                </p>
              </div>
              <div className={styles.nutrient}>
                <p className="text text_type_main-default text_color_inactive">
                  Углеводы, г
                </p>
                <p className="text text_type_main-default text_color_inactive">
                  {props.carbohydrates}
                </p>
              </div>
            </div>
          </div>
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

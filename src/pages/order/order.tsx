import React from "react";
import cn from "classnames";
import styles from "./order.module.css";
import { useSelector } from "../../hooks";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Order = () => {
  const {
    ingredients: { ingredientsData },
  } = useSelector((state) => state);
  return (
    <div className={styles.orderContainer}>
      <p className={cn(styles.center, "text text_type_digits-default mb-10")}>
        #034533
      </p>
      <p className="text text_type_main-medium mb-3">
        Black Hole Singularity острый бургер
      </p>
      <p
        className={cn(
          styles.textColorGreen,
          "text text_type_main-default mb-15"
        )}
      >
        Выполнен
      </p>
      <p className="text text_type_main-medium mb-6">Состав:</p>
      <ul className={cn(styles.ingredientsContainer, "mb-10")}>
        <li className={styles.ingredientContainer}>
          <div className={styles.feedCardIngredientImage}>
            <img
              className={styles.feedCardImg}
              src={ingredientsData[0]?.image_mobile}
              alt={ingredientsData[0]?.name}
            />
          </div>
          <p
            className={cn(styles.ingredientName, "text text_type_main-default")}
          >
            Флюоресцентная булка R2-D3
          </p>
          <div className={styles.priceContainer}>
            <p className="text text_type_digits-default">2 x 20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.ingredientContainer}>
          <div className={styles.feedCardIngredientImage}>
            <img
              className={styles.feedCardImg}
              src={ingredientsData[0]?.image_mobile}
              alt={ingredientsData[0]?.name}
            />
          </div>
          <p
            className={cn(styles.ingredientName, "text text_type_main-default")}
          >
            Флюоресцентная булка R2-D3
          </p>
          <div className={styles.priceContainer}>
            <p className="text text_type_digits-default">2 x 20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.ingredientContainer}>
          <div className={styles.feedCardIngredientImage}>
            <img
              className={styles.feedCardImg}
              src={ingredientsData[0]?.image_mobile}
              alt={ingredientsData[0]?.name}
            />
          </div>
          <p
            className={cn(styles.ingredientName, "text text_type_main-default")}
          >
            Флюоресцентная булка R2-D3
          </p>
          <div className={styles.priceContainer}>
            <p className="text text_type_digits-default">2 x 20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.ingredientContainer}>
          <div className={styles.feedCardIngredientImage}>
            <img
              className={styles.feedCardImg}
              src={ingredientsData[0]?.image_mobile}
              alt={ingredientsData[0]?.name}
            />
          </div>
          <p
            className={cn(styles.ingredientName, "text text_type_main-default")}
          >
            Флюоресцентная булка R2-D3
          </p>
          <div className={styles.priceContainer}>
            <p className="text text_type_digits-default">2 x 20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.ingredientContainer}>
          <div className={styles.feedCardIngredientImage}>
            <img
              className={styles.feedCardImg}
              src={ingredientsData[0]?.image_mobile}
              alt={ingredientsData[0]?.name}
            />
          </div>
          <p
            className={cn(styles.ingredientName, "text text_type_main-default")}
          >
            Флюоресцентная булка R2-D3
          </p>
          <div className={styles.priceContainer}>
            <p className="text text_type_digits-default">2 x 20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
      </ul>
      <div className={styles.infoContainer}>
        <p className="text text_type_main-default text_color_inactive">
          Вчера, 13:50 i-GMT+3
        </p>
        <div className={styles.priceContainer}>
          <p className="text text_type_digits-default">510</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default Order;

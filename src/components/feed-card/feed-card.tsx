import React from "react";
import styles from "./feed-card.module.css";
import cn from "classnames";
import { useSelector } from "../../hooks";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const FeedCard = () => {
  const {
    ingredients: { ingredientsData },
  } = useSelector((state) => state);

  return (
    <div className={cn(styles.feedCardContainer, "p-6")}>
      <div className={styles.feedCardTopWrapper}>
        <p className="text text_type_digits-default">#034535</p>
        <p className="text text_type_main-default text_color_inactive">
          Сегодня, 16:20 i-GMT+3
        </p>
      </div>
      <p className="text text_type_main-medium">
        Death Star Starship Main бургер
      </p>
      <div className={styles.feedCardBottomWrapper}>
        <ul className={styles.feedCardListContainer}>
          <li className={cn(styles.feedCardIngredientImage)}>
            <img
              className={styles.feedCardImg}
              src={ingredientsData[0]?.image_mobile}
              alt={ingredientsData[0]?.name}
            />
          </li>
          <li className={cn(styles.feedCardIngredientImage)}>
            <img
              className={styles.feedCardImg}
              src={ingredientsData[3]?.image_mobile}
              alt={ingredientsData[3]?.name}
            />
          </li>
          <li className={cn(styles.feedCardIngredientImage)}>
            <img
              className={styles.feedCardImg}
              src={ingredientsData[5]?.image_mobile}
              alt={ingredientsData[5]?.name}
            />
          </li>
        </ul>
        <div className={styles.feedCardPriceWrapper}>
          <p className="text text_type_digits-default">480</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;

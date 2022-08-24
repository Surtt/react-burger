import React, { FC, useMemo } from "react";
import styles from "./feed-card.module.css";
import cn from "classnames";
import { useSelector } from "../../hooks";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { convertOrderDate } from "../../utils/convertOrderDate";
import { IIngredient } from "../../types";
import { getStatus } from "../../utils/getStatus";

interface IFeedCard {
  number: number;
  name: string;
  date: string;
  ingredients: string[];
  status?: string;
}

const FeedCard: FC<IFeedCard> = ({
  number,
  name,
  date,
  ingredients,
  status,
}) => {
  const {
    ingredients: { ingredientsData },
  } = useSelector((state) => state);
  const convertDate = convertOrderDate(date);

  const ingredientsOrder = ingredients.flatMap((id: string) =>
    ingredientsData.filter((ingredient: IIngredient) => ingredient._id === id)
  );

  const getTotalPrice = useMemo(() => {
    return ingredientsOrder.reduce(
      (acc: number, current: { price: number }) => acc + current?.price,
      0
    );
  }, [ingredientsOrder]);
  const price = getTotalPrice;

  const visibleCountIngredients = 6;
  const countIngredients = ingredients.length;
  const plusNumberIngredients = countIngredients - visibleCountIngredients;
  const slicedIngredientsOrder = ingredientsOrder.slice(
    0,
    visibleCountIngredients
  );
  const statusName = getStatus(status);
  return (
    <div className={cn(styles.feedCardContainer, "p-6")}>
      <div className={styles.feedCardTopWrapper}>
        <p className="text text_type_digits-default">#{number}</p>
        <p className="text text_type_main-default text_color_inactive">
          {convertDate}
        </p>
      </div>
      <div>
        <p className="text text_type_main-medium mb-2">{name}</p>
        {status && (
          <p
            className={cn(
              styles[`textColor${statusName?.color}`],
              "text text_type_main-default mb-6"
            )}
          >
            {statusName?.text}
          </p>
        )}
      </div>
      <div className={styles.feedCardBottomWrapper}>
        <ul className={styles.feedCardListContainer}>
          {slicedIngredientsOrder.map((ingredient: IIngredient, idx) => (
            <li
              style={{ zIndex: visibleCountIngredients - idx }}
              key={`${ingredient._id}-${idx}`}
              className={cn(styles.feedCardIngredientImage)}
            >
              <img
                className={styles.feedCardImg}
                src={ingredient?.image_mobile}
                alt={ingredient?.name}
              />
            </li>
          ))}
          {countIngredients > 6 ? (
            <div className={styles.overlay}>
              <span>{`+${plusNumberIngredients}`}</span>
            </div>
          ) : null}
        </ul>
        <div className={styles.feedCardPriceWrapper}>
          <p className="text text_type_digits-default">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;

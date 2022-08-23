import React, { FC, useEffect, useMemo } from "react";
import cn from "classnames";
import styles from "./order.module.css";
import { useDispatch, useSelector } from "../../hooks";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import { getOrderData } from "../../services/actions/ingredients";
import { convertOrderDate } from "../../utils/convertOrderDate";
import { IIngredient } from "../../types";
import { getStatus } from "../../utils/getStatus";

interface IAcc {
  ingredient: { [name: string]: IIngredient };
  count: { [name: string]: number };
}

interface IOrder {
  isModal: boolean;
}

const Order: FC<IOrder> = ({ isModal }) => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const {
    ingredients: { ingredientsData, orderData },
  } = useSelector((state) => state);

  const convertDate = convertOrderDate(orderData?.createdAt);

  const status = getStatus(orderData?.status);

  const ingredientsOrder = orderData?.ingredients.flatMap((id: string) =>
    ingredientsData.filter((ingredient: IIngredient) => ingredient._id === id)
  );
  const uniqueIds: string[] = Array.from(new Set(orderData?.ingredients));

  const getCountIngredient = (arr: IIngredient[]) => {
    return arr?.reduce(
      (acc: IAcc, el: IIngredient) => {
        const id = el._id;
        acc.ingredient[id] = el;
        acc.count[id] = (acc.count[id] || 0) + 1;
        return acc;
      },
      { ingredient: {}, count: {} }
    );
  };

  const getTotalPrice = useMemo(() => {
    return ingredientsOrder?.reduce(
      (acc: number, current: { price: number }) => acc + current?.price,
      0
    );
  }, [ingredientsOrder]);

  useEffect(() => dispatch(getOrderData(id)), [id, dispatch]);

  return (
    <div
      className={styles.orderContainer}
      style={isModal ? {} : { marginTop: 122, marginBottom: 230 }}
    >
      <p className={cn(styles.center, "text text_type_digits-default mb-10")}>
        #{orderData?.number}
      </p>
      <p className="text text_type_main-medium mb-3">{orderData?.name}</p>
      <p
        className={cn(
          styles[`textColor${status?.color}`],
          "text text_type_main-default mb-15"
        )}
      >
        {status?.text}
      </p>
      <p className="text text_type_main-medium mb-6">Состав:</p>
      <ul className={cn(styles.ingredientsContainer, "mb-10")}>
        {uniqueIds?.map((id) => (
          <li key={id} className={styles.ingredientContainer}>
            <div className={styles.feedCardIngredientImage}>
              <img
                className={styles.feedCardImg}
                src={
                  getCountIngredient(ingredientsOrder)?.ingredient[id]
                    ?.image_mobile
                }
                alt={getCountIngredient(ingredientsOrder)?.ingredient[id]?.name}
              />
            </div>
            <p
              className={cn(
                styles.ingredientName,
                "text text_type_main-default"
              )}
            >
              {getCountIngredient(ingredientsOrder)?.ingredient[id]?.name}
            </p>
            <div className={styles.priceContainer}>
              <p className="text text_type_digits-default">
                {getCountIngredient(ingredientsOrder)?.count[id]} x{" "}
                {getCountIngredient(ingredientsOrder)?.ingredient[id]?.price *
                  getCountIngredient(ingredientsOrder)?.count[id]}
              </p>
              <CurrencyIcon type="primary" />
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.infoContainer}>
        <p className="text text_type_main-default text_color_inactive">
          {convertDate}
        </p>
        <div className={styles.priceContainer}>
          <p className="text text_type_digits-default">{getTotalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default Order;

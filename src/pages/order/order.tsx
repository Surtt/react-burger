import React, { useEffect, useMemo } from "react";
import cn from "classnames";
import styles from "./order.module.css";
import { useDispatch, useSelector } from "../../hooks";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import { getOrderData } from "../../services/actions/ingredients";
import { convertOrderDate } from "../../utils/convertOrderDate";
import { IIngredient } from "../../types";

const Order = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const {
    ingredients: { ingredientsData, orderData },
  } = useSelector((state) => state);

  const convertDate = convertOrderDate(orderData?.createdAt);
  const getStatus = () => {
    switch (orderData?.status) {
      case "done":
        return { text: "Выполнен", color: "Green" };
      case "pending":
        return { text: "Готовится", color: "White" };
      case "created":
        return { text: "Создан", color: "White" };
    }
  };
  const status = getStatus();

  const ingredientsOrder = orderData?.ingredients.flatMap((id: string) =>
    ingredientsData.filter((ingredient: IIngredient) => ingredient._id === id)
  );

  const getTotalPrice = useMemo(() => {
    return ingredientsOrder?.reduce(
      (acc: number, current: { price: number }) => acc + current?.price,
      0
    );
  }, [ingredientsOrder]);
  const price = getTotalPrice;

  useEffect(() => dispatch(getOrderData(id)), [id]);
  return (
    <div className={styles.orderContainer}>
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
        {ingredientsOrder?.map((ingredient: IIngredient) => (
          <li className={styles.ingredientContainer}>
            <div className={styles.feedCardIngredientImage}>
              <img
                className={styles.feedCardImg}
                src={ingredient?.image_mobile}
                alt={ingredient?.name}
              />
            </div>
            <p
              className={cn(
                styles.ingredientName,
                "text text_type_main-default"
              )}
            >
              {ingredient?.name}
            </p>
            <div className={styles.priceContainer}>
              <p className="text text_type_digits-default">
                {ingredient?.price}
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
          <p className="text text_type_digits-default">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default Order;

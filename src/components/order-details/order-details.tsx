import React from "react";
import cn from "classnames";

import styles from "./order-details.module.css";
import done from "../../images/done.svg";
import Loader from "../loader/loader";
import { useSelector } from "../../hooks";

const OrderDetails = () => {
  const { orderNumber, orderNumberRequest } = useSelector(
    (state) => state.ingredients
  );

  const number = orderNumber?.number;

  return (
    <>
      {orderNumberRequest ? (
        <Loader loading={orderNumberRequest} />
      ) : (
        <div className={cn(styles.orderContainer, "mb-30")}>
          <p className="text text_type_digits-large mb-8">{number}</p>
          <p className="text text_type_main-medium mb-15">
            идентификатор заказа
          </p>
          <img className="mb-15" src={done} alt="Успешный заказ" />
          <p className="text text_type_main-default mb-2">
            Ваш заказ начали готовить
          </p>
          <p className="text text_type_main-default text_color_inactive">
            Дождитесь готовности на орбитальной станции
          </p>
        </div>
      )}
    </>
  );
};

export default OrderDetails;

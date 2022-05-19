import React from "react";
import cn from "classnames";

import IconDone from "../icons/icon-done/icon-done";

import styles from "./order-details.module.css";

const OrderDetails = () => {
  return (
    <div className={cn(styles.orderContainer, "mb-30")}>
      <p className="text text_type_digits-large mb-8">034536</p>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <IconDone className="mb-15" />
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;

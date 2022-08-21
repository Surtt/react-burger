import React from "react";
import styles from "./orders-info.module.css";
import cn from "classnames";
import { useSelector } from "../../hooks";
import { IOrder } from "../../types";

export const OrdersInfo = () => {
  const {
    wsReducer: { orders, total, totalToday },
  } = useSelector((state) => state);

  const ordersDone = orders
    .filter((order: IOrder) => order.status === "done")
    .slice(0, 20);

  const ordersPending = orders
    .filter((order: IOrder) => order.status === "pending")
    .slice(0, 20);

  return (
    <section className={styles.ordersInfo}>
      <div className={styles.topWrapper}>
        <div className={styles.readyOrders}>
          <p className="text text_type_main-medium">Готовы:</p>
          <div className={styles.ordersNumberWrapper}>
            {ordersDone.map((order: IOrder) => (
              <p
                key={order._id}
                className={cn(
                  styles.orderNumber,
                  "text text_type_digits-default"
                )}
              >
                {order.number}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.cookOrders}>
          <p className="text text_type_main-medium">В работе:</p>
          <div className={styles.ordersNumberWrapper}>
            {ordersPending.map((order: IOrder) => (
              <p key={order._id} className="text text_type_digits-default">
                {order.number}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.middleWrapper}>
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <p className="text text_type_digits-large">{total}</p>
      </div>
      <div className={styles.bottomWrapper}>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <p className="text text_type_digits-large">{totalToday}</p>
      </div>
    </section>
  );
};

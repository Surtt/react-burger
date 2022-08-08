import React from "react";
import styles from "./orders-info.module.css";
import cn from "classnames";

export const OrdersInfo = () => {
  return (
    <section className={styles.ordersInfo}>
      <div className={styles.topWrapper}>
        <div className={styles.readyOrders}>
          <p className="text text_type_main-medium">Готовы:</p>
          <div className={styles.ordersNumberWrapper}>
            <p
              className={cn(
                styles.orderNumber,
                "text text_type_digits-default"
              )}
            >
              034533
            </p>
            <p
              className={cn(
                styles.orderNumber,
                "text text_type_digits-default"
              )}
            >
              034532
            </p>
            <p
              className={cn(
                styles.orderNumber,
                "text text_type_digits-default"
              )}
            >
              034530
            </p>
            <p
              className={cn(
                styles.orderNumber,
                "text text_type_digits-default"
              )}
            >
              034527
            </p>
            <p
              className={cn(
                styles.orderNumber,
                "text text_type_digits-default"
              )}
            >
              034525
            </p>
          </div>
        </div>
        <div className={styles.cookOrders}>
          <p className="text text_type_main-medium">В работе:</p>
          <div className={styles.ordersNumberWrapper}>
            <p className="text text_type_digits-default">034538</p>
            <p className="text text_type_digits-default">034541</p>
            <p className="text text_type_digits-default">034542</p>
          </div>
        </div>
      </div>
      <div className={styles.middleWrapper}>
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <p className="text text_type_digits-large">28 752</p>
      </div>
      <div className={styles.bottomWrapper}>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <p className="text text_type_digits-large">138</p>
      </div>
    </section>
  );
};

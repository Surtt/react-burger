import React from "react";
import styles from "./orders-list.module.css";
import FeedCard from "../feed-card/feed-card";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "../../hooks";
import { IOrder } from "../../types";

export const OrdersList = () => {
  const {
    wsReducer: { orders },
  } = useSelector((state) => state);
  const location = useLocation();
  return (
    <section className={styles.ordersList}>
      <p className="text text_type_main-large mb-5">Лента заказов</p>
      <div className={styles.ordersListContainer}>
        {orders.map((order: IOrder) => {
          return (
            <Link
              className={styles.link}
              key={order._id}
              to={{
                pathname: `/feed/${order.number}`,
                state: { details: location },
              }}
            >
              <FeedCard
                number={order.number}
                name={order.name}
                date={order.createdAt}
                ingredients={order.ingredients}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

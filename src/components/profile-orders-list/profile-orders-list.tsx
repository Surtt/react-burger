import React, { useEffect } from "react";
import styles from "./profile-orders-list.module.css";
import FeedCard from "../feed-card/feed-card";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "../../hooks";
import { IOrder } from "../../types";
import { WS_CONNECTION_START_AUTH } from "../../services/constants/ws-auth";

export const ProfileOrdersList = () => {
  const dispatch = useDispatch();
  const {
    wsAuthReducer: { orders },
  } = useSelector((state) => state);
  const location = useLocation();

  useEffect(() => dispatch({ type: WS_CONNECTION_START_AUTH }), [dispatch]);
  return (
    <section className={styles.ordersList}>
      <div className={styles.ordersListContainer}>
        {orders?.map((order: IOrder) => {
          return (
            <Link
              className={styles.link}
              key={order._id}
              to={{
                pathname: `/profile/orders/${order.number}`,
                state: { details: location },
              }}
            >
              <FeedCard
                number={order.number}
                name={order.name}
                date={order.createdAt}
                ingredients={order.ingredients}
                status={order.status}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

import React, { useEffect } from "react";
import styles from "./profile-orders-list.module.css";
import FeedCard from "../feed-card/feed-card";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "../../hooks";
import { IOrder } from "../../types";
import {
  WS_CONNECTION_CLOSED_AUTH,
  WS_CONNECTION_START_AUTH,
} from "../../services/constants/ws-auth";

export const ProfileOrdersList = () => {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const {
    wsAuthReducer: { orders },
  } = useSelector((state) => state);
  const location = useLocation();

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START_AUTH });
    return () => dispatch({ type: WS_CONNECTION_CLOSED_AUTH });
  }, [dispatch]);
  return (
    <section className={styles.ordersList}>
      <div className={styles.ordersListContainer}>
        {orders
          ?.map((order) => {
            return (
              <Link
                className={styles.link}
                key={order._id}
                to={{
                  pathname: `${url}/${order.number}`,
                  state: { background: location },
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
          })
          .reverse()}
      </div>
    </section>
  );
};

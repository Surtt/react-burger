import React from "react";
import styles from "./orders-list.module.css";
import FeedCard from "../feed-card/feed-card";
import { Link, useLocation } from "react-router-dom";

export const OrdersList = () => {
  const location = useLocation();
  return (
    <section className={styles.ordersList}>
      <p className="text text_type_main-large mb-5">Лента заказов</p>
      <div className={styles.ordersListContainer}>
        <Link
          className={styles.link}
          // key={item._id}
          to={{
            pathname: `/feed/1`,
            state: { details: location },
          }}
        >
          <FeedCard />
        </Link>
        <Link
          className={styles.link}
          // key={item._id}
          to={{
            // pathname: `/ingredients/${item._id}`,
            pathname: `/feed/2`,
            state: { details: location },
          }}
        >
          <FeedCard />
        </Link>
        <Link
          className={styles.link}
          // key={item._id}
          to={{
            pathname: `/feed/3`,
            // pathname: `/ingredients/${item._id}`,
            state: { details: location },
          }}
        >
          <FeedCard />
        </Link>
      </div>
    </section>
  );
};

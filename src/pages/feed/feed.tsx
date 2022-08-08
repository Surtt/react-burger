import React from "react";
import styles from "./feed.module.css";
import cn from "classnames";
import { OrdersList } from "../../components/orders-list/orders-list";
import { OrdersInfo } from "../../components/orders-info/orders-info";

const Feed = () => {
  return (
    <main className={cn(styles.main, "pl-5 pr-5 pt-10")}>
      <OrdersList />
      <OrdersInfo />
    </main>
  );
};

export default Feed;

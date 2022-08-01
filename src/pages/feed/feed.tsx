import React from "react";
import styles from "./feed.module.css";
import cn from "classnames";
import FeedCard from "../../components/feed-card/feed-card";

const Feed = () => {
  return (
    <main className={cn(styles.main, "pl-5 pr-5 pt-10")}>
      <section className={styles.leftSide}>
        <p className="text text_type_main-large mb-5">Лента заказов</p>
        <FeedCard />
      </section>
      <section className={styles.rightSide}>222</section>
    </main>
  );
};

export default Feed;

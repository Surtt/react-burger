import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tabs.module.css";
import cn from "classnames";

const Tabs = () => {
  const [currentTab, setCurrentTab] = React.useState("bun");
  return (
    <div className={cn(styles.tabsContainer, "mt-5")}>
      <Tab active={currentTab === "bun"} value="bun" onClick={setCurrentTab}>
        Булки
      </Tab>
      <Tab
        active={currentTab === "sauce"}
        value="sauce"
        onClick={setCurrentTab}
      >
        Соусы
      </Tab>
      <Tab
        active={currentTab === "filling"}
        value="filling"
        onClick={setCurrentTab}
      >
        Начинки
      </Tab>
    </div>
  );
};

export default Tabs;

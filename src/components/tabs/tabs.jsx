import React, { useEffect, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tabs.module.css";
import cn from "classnames";

const Tabs = ({ inViewBuns, inViewSauces, inViewMains }) => {
  console.log(inViewBuns, "first");
  console.log(inViewSauces, "second");
  console.log(inViewMains, "third");
  const [currentTab, setCurrentTab] = useState("bun");
  const handleTabClick = (type) => {
    setCurrentTab(type);
    document
      .getElementById(type)
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };
  console.log(currentTab);
  useEffect(() => {
    if (inViewBuns) {
      setCurrentTab("bun");
    } else if (inViewSauces) {
      setCurrentTab("sauce");
    } else if (inViewMains) {
      setCurrentTab("main");
    }
  }, [inViewBuns, inViewMains, inViewSauces]);
  return (
    <div className={cn(styles.tabsContainer, "mt-5")}>
      <Tab active={currentTab === "bun"} value="bun" onClick={handleTabClick}>
        Булки
      </Tab>
      <Tab
        active={currentTab === "sauce"}
        value="sauce"
        onClick={handleTabClick}
      >
        Соусы
      </Tab>
      <Tab active={currentTab === "main"} value="main" onClick={handleTabClick}>
        Начинки
      </Tab>
    </div>
  );
};

export default Tabs;

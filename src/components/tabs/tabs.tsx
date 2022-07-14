import React, { FC, useEffect, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tabs.module.css";
import cn from "classnames";

interface ITabs {
  inViewBuns: boolean;
  inViewSauces: boolean;
  inViewMains: boolean;
}

const Tabs: FC<ITabs> = ({ inViewBuns, inViewSauces, inViewMains }) => {
  const [currentTab, setCurrentTab] = useState<string>("bun");
  const handleTabClick = (type: string) => {
    setCurrentTab(type);
    const tab = document.getElementById(type);
    if (tab) {
      tab.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

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

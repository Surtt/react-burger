import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import styles from "./app-header.module.css";

const AppHeader = () => {
  return (
    <header className="p-4">
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={cn(styles.listItem, "p-5 mr-2")}>
            <BurgerIcon type="primary" />
            <span className="ml-2">Конструктор</span>
          </li>
          <li className={cn(styles.listItem, "p-5 mr-2")}>
            <ListIcon type="primary" />
            <span className="ml-2">Лента заказов</span>
          </li>
        </ul>
        <div className={styles.logo}>
          <Logo />
        </div>
        <li className={styles.listItem}>
          <ProfileIcon type="primary" />
          <span className="ml-2">Личный кабинет</span>
        </li>
      </nav>
    </header>
  );
};

export default AppHeader;

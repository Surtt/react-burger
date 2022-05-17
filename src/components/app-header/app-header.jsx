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
    <header className="pt-4 pb-4">
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={cn(styles.listItem, "p-5 mr-2")}>
            <BurgerIcon type="primary" />
            <span className="text text_type_main-default ml-2">
              Конструктор
            </span>
          </li>
          <li className={cn(styles.listItem, "p-5")}>
            <ListIcon type="secondary" />
            <span
              className={cn(
                styles.notActiveLink,
                "text text_type_main-default ml-2"
              )}
            >
              Лента заказов
            </span>
          </li>
        </ul>
        <div className={styles.logo}>
          <Logo />
        </div>
        <li className={cn(styles.listItem, "p-5")}>
          <ProfileIcon type="secondary" />
          <span
            className={cn(
              styles.notActiveLink,
              "text text_type_main-default ml-2"
            )}
          >
            Личный кабинет
          </span>
        </li>
      </nav>
    </header>
  );
};

export default AppHeader;

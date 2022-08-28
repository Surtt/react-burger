import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import styles from "./app-header.module.css";
import { Link, NavLink, useRouteMatch } from "react-router-dom";

const AppHeader = () => {
  const isConstructor = !!useRouteMatch({ path: "/", exact: true });
  const isFeed = !!useRouteMatch("/feed");
  const isProfile = !!useRouteMatch("/profile");

  return (
    <header className={cn(styles.header, "pt-4 pb-4")}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <NavLink
            activeClassName={isConstructor ? styles.active : ""}
            className={styles.link}
            to="/"
          >
            <li className={cn(styles.listItem, "p-5 mr-2")}>
              <BurgerIcon type={isConstructor ? "primary" : "secondary"} />
              <span className="text text_type_main-default ml-2">
                Конструктор
              </span>
            </li>
          </NavLink>
          <NavLink
            activeClassName={isFeed ? styles.active : ""}
            className={styles.link}
            to="/feed"
          >
            <li className={cn(styles.listItem, "p-5")}>
              <ListIcon type={isFeed ? "primary" : "secondary"} />
              <span
                className={cn(
                  styles.notActiveLink,
                  "text text_type_main-default ml-2"
                )}
              >
                Лента заказов
              </span>
            </li>
          </NavLink>
        </ul>
        <div className={styles.logo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <NavLink
          activeClassName={styles.active}
          className={styles.link}
          to="/profile"
        >
          <li className={cn(styles.listItem, "p-5")}>
            <ProfileIcon type={isProfile ? "primary" : "secondary"} />
            <span className="text text_type_main-default ml-2">
              Личный кабинет
            </span>
          </li>
        </NavLink>
      </nav>
    </header>
  );
};

export default AppHeader;

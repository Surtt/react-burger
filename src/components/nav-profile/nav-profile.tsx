import React from "react";
import styles from "./nav-profile.module.css";
import { NavLink, useRouteMatch } from "react-router-dom";
import cn from "classnames";
import { logoutUser } from "../../services/actions/auth";
import { useDispatch, useSelector } from "../../hooks";

const NavProfile = () => {
  const { url } = useRouteMatch();

  const dispatch = useDispatch();
  const { logoutRequest } = useSelector((state) => state.auth);
  const handleLogout = () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      dispatch(logoutUser({ token: refreshToken }));
    }
  };
  return (
    <div className={styles.leftSide}>
      <ul className="mb-20">
        <li className="text text_type_main-medium">
          <NavLink
            activeClassName={styles.active}
            className={cn(styles.link, "pt-4 pb-4")}
            exact={true}
            to={`${url}`}
          >
            Профиль
          </NavLink>
        </li>
        <li className="text text_type_main-medium">
          <NavLink
            activeClassName={styles.active}
            className={cn(styles.link, "pt-4 pb-4")}
            exact={true}
            to={`${url}/orders`}
          >
            История заказов
          </NavLink>
        </li>
        <li className="text text_type_main-medium">
          <NavLink
            onClick={handleLogout}
            className={cn(styles.link, "pt-4 pb-4")}
            to={!logoutRequest ? "/profile" : "/login"}
          >
            Выход
          </NavLink>
        </li>
      </ul>
      <p className={cn(styles.text, "text text_type_main-default")}>
        В этом разделе вы можете
        <br />
        изменить свои персональные данные
      </p>
    </div>
  );
};

export default NavProfile;

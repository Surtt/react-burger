import React, { useEffect, useRef, useState } from "react";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";

import styles from "./profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logoutUser, registerUser } from "../../services/actions/auth";

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const history = useHistory();

  const [values, setValues] = useState({
    name: user.name,
    email: user.email,
    password: "",
  });
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // dispatch(registerUser(values));
    // history.replace({ pathname: "/" });
  };

  const handleLogout = () => {
    const refreshToken = localStorage.getItem("refreshToken");
    dispatch(logoutUser({ token: refreshToken }));
  };

  const inputNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const onIconClick = (refName) => {
    refName.current.focus();
  };

  // const isEmptyUser = (user) => {
  //   for (let key in user) {
  //     return false;
  //   }
  //   return true;
  // };
  //
  // if (isEmptyUser(user)) {
  //   return <Redirect to={{ pathname: "/" }} />;
  // }
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <main className={cn(styles.container, "pl-5 pr-5")}>
      <section className={styles.wrapper}>
        <div className={styles.leftSide}>
          <ul className="mb-20">
            <li className="text text_type_main-medium">
              <NavLink
                activeClassName={styles.active}
                className={cn(styles.link, "pt-4 pb-4")}
                to="/profile"
              >
                Профиль
              </NavLink>
            </li>
            <li className="text text_type_main-medium">
              <NavLink
                activeClassName={styles.active}
                className={cn(styles.link, "pt-4 pb-4")}
                to="/profile/orders"
              >
                История заказов
              </NavLink>
            </li>
            <li className="text text_type_main-medium">
              <NavLink
                onClick={handleLogout}
                activeClassName={styles.active}
                className={cn(styles.link, "pt-4 pb-4")}
                to="/login"
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
        <form onSubmit={onSubmit} className={styles.form}>
          <Input
            type="text"
            placeholder="Имя"
            onChange={handleChange}
            value={values.name}
            name="name"
            error={false}
            errorText="Ошибка"
            size="default"
            icon="EditIcon"
            ref={inputNameRef}
            onIconClick={() => onIconClick(inputNameRef)}
          />
          <Input
            type="email"
            placeholder="E-mail"
            onChange={handleChange}
            value={values.email}
            name="email"
            error={false}
            errorText="Ошибка"
            size="default"
            icon="EditIcon"
            ref={inputEmailRef}
            onIconClick={() => onIconClick(inputEmailRef)}
          />
          <Input
            type="password"
            placeholder="Пароль"
            onChange={handleChange}
            value={values.password}
            name="password"
            error={false}
            errorText="Ошибка"
            size="default"
            icon="EditIcon"
            ref={inputPasswordRef}
            onIconClick={() => onIconClick(inputPasswordRef)}
          />
        </form>
      </section>
    </main>
  );
};

export default Profile;

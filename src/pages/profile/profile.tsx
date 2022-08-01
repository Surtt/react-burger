import React, { ChangeEvent, SyntheticEvent, useRef, useState } from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import { Link, NavLink } from "react-router-dom";

import styles from "./profile.module.css";
import { logoutUser, updateUser } from "../../services/actions/auth";
import Loader from "../../components/loader/loader";
import { useDispatch, useSelector } from "../../hooks";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, userRequest, logoutRequest } = useSelector(
    (state) => state.auth
  );

  const [values, setValues] = useState({
    name: user.name,
    email: user.email,
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(updateUser(values));
    setDisabledName(true);
    setDisabledEmail(true);
    setDisabledPassword(true);
  };

  const handleLogout = () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      dispatch(logoutUser({ token: refreshToken }));
    }
  };

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const [isDisabledName, setDisabledName] = useState(true);
  const [isDisabledEmail, setDisabledEmail] = useState(true);
  const [isDisabledPassword, setDisabledPassword] = useState(true);

  const onIconClick = (current: HTMLInputElement | null) => {
    if (!current) return;
    const name = current.name;
    if (name === "name") {
      setDisabledName(!isDisabledName);
    } else if (name === "email") {
      setDisabledEmail(!isDisabledEmail);
    } else if (name === "password") {
      setDisabledPassword(!isDisabledPassword);
    }
    setTimeout(() => current.focus(), 0);
  };

  const handleReset = () => {
    setValues({ ...values, name: user.name, email: user.email, password: "" });
    setDisabledName(true);
    setDisabledEmail(true);
    setDisabledPassword(true);
  };

  if (userRequest) {
    return <Loader loading={userRequest} />;
  }

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
              <Link
                onClick={handleLogout}
                className={cn(styles.link, "pt-4 pb-4")}
                to={!logoutRequest ? "/profile" : "/login"}
              >
                Выход
              </Link>
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
            icon={isDisabledName ? "EditIcon" : "CloseIcon"}
            ref={inputNameRef}
            onIconClick={() => onIconClick(inputNameRef.current)}
            disabled={isDisabledName}
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
            icon={isDisabledEmail ? "EditIcon" : "CloseIcon"}
            ref={inputEmailRef}
            onIconClick={() => onIconClick(inputEmailRef.current)}
            disabled={isDisabledEmail}
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
            icon={isDisabledPassword ? "EditIcon" : "CloseIcon"}
            ref={inputPasswordRef}
            onIconClick={() => onIconClick(inputPasswordRef.current)}
            disabled={isDisabledPassword}
          />
          {user.name !== values.name ||
          user.email !== values.email ||
          values.password.length >= 3 ? (
            <div className={styles.buttons}>
              <Button type="secondary" size="medium" onClick={handleReset}>
                Отмена
              </Button>
              <Button type="primary" size="medium" htmlType="submit">
                Сохранить
              </Button>
            </div>
          ) : null}
        </form>
      </section>
    </main>
  );
};

export default Profile;

import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useLocation } from "react-router-dom";
import cn from "classnames";

import styles from "../form.module.css";
import { loginUser } from "../../services/actions/auth";
import { isEmptyUser } from "../../utils/isEmtyUser";
import { ILocationState } from "../../types";
import { useDispatch, useSelector } from "../../hooks";

const Login = () => {
  const location = useLocation<ILocationState>();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [values, setValues] = useState({
    name: "",
    email: "",
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
    dispatch(loginUser(values));
  };

  if (!isEmptyUser(user)) {
    return <Redirect to={location.state?.from || "/"} />;
  }

  return (
    <main className={cn(styles.container, "pl-5 pr-5")}>
      <form onSubmit={onSubmit} className={styles.wrapper}>
        <p className="text text_type_main-medium">Вход</p>
        <Input
          type="email"
          placeholder="E-mail"
          onChange={handleChange}
          value={values.email}
          name="email"
          error={false}
          errorText="Ошибка"
          size="default"
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password}
          name="password"
        />
        <Button type="primary" size="medium" htmlType="submit">
          Войти
        </Button>
      </form>
      <div className={cn(styles.bottomSide, "mt-20")}>
        <p className={cn(styles.text, "text text_type_main-default")}>
          Вы — новый пользователь?&nbsp;
          <Link
            className={cn(styles.link, "text text_type_main-default")}
            to="/register"
          >
            Зарегистрироваться
          </Link>
        </p>
        <p className={cn(styles.text, "mt-4 text text_type_main-default")}>
          Забыли пароль?&nbsp;
          <Link
            className={cn(styles.link, "text text_type_main-default")}
            to="/forgot-password"
          >
            Восстановить пароль
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;

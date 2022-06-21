import React, { useState } from "react";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useHistory } from "react-router-dom";
import cn from "classnames";

import styles from "../form.module.css";
import { loginUser, registerUser } from "../../services/actions/auth";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
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
    dispatch(loginUser(values));
    // if (user.name) {
    //   history.replace({ pathname: "/" });
    // }
  };

  const isEmptyUser = (user) => {
    for (let key in user) {
      if (user[key]) {
        console.log(user[key]);
        return false;
      }
    }
    return true;
  };

  if (!isEmptyUser(user)) {
    return <Redirect to={{ pathname: "/" }} />;
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

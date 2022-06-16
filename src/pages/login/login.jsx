import React, { useState } from "react";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "../form.module.css";

const Login = () => {
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

  return (
    <main className={cn(styles.container, "pl-5 pr-5")}>
      <form className={styles.wrapper}>
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
        <Button type="primary" size="medium">
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

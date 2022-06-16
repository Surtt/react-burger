import React, { useState } from "react";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "../form.module.css";

const ResetPassword = () => {
  const [values, setValues] = useState({
    newPassword: "",
    code: "",
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
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <PasswordInput
          onChange={handleChange}
          value={values.newPassword}
          name="newPassword"
          placeholder="Введите новый пароль"
        />
        <Input
          type="text"
          placeholder="Введите код из письма"
          onChange={handleChange}
          value={values.code}
          name="code"
          error={false}
          errorText="Ошибка"
          size="default"
        />
        <Button type="primary" size="medium">
          Сохранить
        </Button>
      </form>
      <div className={cn(styles.bottomSide, "mt-20")}>
        <p className={cn(styles.text, "text text_type_main-default")}>
          Вспомнили пароль?&nbsp;
          <Link
            className={cn(styles.link, "text text_type_main-default")}
            to="/login"
          >
            Войти
          </Link>
        </p>
      </div>
    </main>
  );
};

export default ResetPassword;

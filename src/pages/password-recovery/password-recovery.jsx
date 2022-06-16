import React, { useState } from "react";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "../form.module.css";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <main className={cn(styles.container, "pl-5 pr-5")}>
      <form className={styles.wrapper}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <Input
          type="email"
          placeholder="Укажите e-mail"
          onChange={handleChange}
          value={email}
          name="email"
          error={false}
          errorText="Ошибка"
          size="default"
        />
        <Button type="primary" size="medium">
          Восстановить
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

export default PasswordRecovery;

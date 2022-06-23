import React, { useState } from "react";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import cn from "classnames";

import styles from "../form.module.css";
import { forgotPassword, registerUser } from "../../services/actions/auth";
import { useDispatch, useSelector } from "react-redux";

const ForgotPassword = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, isUserSendPasswordChangeReq } = useSelector(
    (state) => state.auth
  );
  const [values, setValues] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(values));
  };

  const isEmptyUser = (user) => {
    for (let key in user) {
      if (user[key]) {
        return false;
      }
    }
    return true;
  };

  if (!isEmptyUser(user)) {
    return <Redirect to={location.state?.from || "/"} />;
  }

  if (isUserSendPasswordChangeReq) {
    return <Redirect to={{ pathname: "/reset-password" }} />;
  }

  return (
    <main className={cn(styles.container, "pl-5 pr-5")}>
      <form onSubmit={onSubmit} className={styles.wrapper}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <Input
          type="email"
          placeholder="Укажите e-mail"
          onChange={handleChange}
          value={values.email}
          name="email"
          error={false}
          errorText="Ошибка"
          size="default"
        />
        <Button type="primary" size="medium" htmlType="submit">
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

export default ForgotPassword;

import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useLocation } from "react-router-dom";
import cn from "classnames";

import styles from "../form.module.css";
import { forgotPassword } from "../../services/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { isEmptyUser } from "../../utils/isEmtyUser";
import { ILocationState } from "../../types";

const ForgotPassword = () => {
  const location = useLocation<ILocationState>();
  const dispatch = useDispatch();
  const { user, isUserSendPasswordChangeReq } = useSelector(
    (state: any) => state.auth
  );
  const [values, setValues] = useState({
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    //@ts-ignore
    dispatch(forgotPassword(values));
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

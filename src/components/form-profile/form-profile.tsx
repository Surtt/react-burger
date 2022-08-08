import React, { ChangeEvent, SyntheticEvent, useRef, useState } from "react";
import styles from "./form-profile.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "../../hooks";
import { updateUser } from "../../services/actions/auth";

const FormProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
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
  return (
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
  );
};

export default FormProfile;

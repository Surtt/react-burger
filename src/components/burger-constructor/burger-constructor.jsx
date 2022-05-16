import React from "react";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";

const BurgerConstructor = ({ data }) => {
  const bun = data.find((b) => b.name === "Краторная булка N-200i");
  return (
    <section className={cn(styles.burgerConstructorContainer, "mt-25")}>
      <div className={styles.constructorWrapper}>
        <div className={styles.bunWrapper}>
          <div />
          <div />
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={bun.image}
          />
        </div>
        <ul className={styles.ingredientsWrapper}>
          {data
            .filter(({ type }) => type !== "bun")
            .map(({ image, name, price }, idx) => (
              <li key={idx.toString()} className={styles.ingredientWrapper}>
                <DragIcon type="primary" />
                <div />
                <ConstructorElement
                  text={name}
                  price={price}
                  thumbnail={image}
                />
              </li>
            ))}
        </ul>
        <div className={styles.bunWrapper}>
          <div />
          <div />
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={bun.image}
          />
        </div>
        <div className={cn(styles.priceWrapper, "mt-10")}>
          <div className={styles.price}>
            <p className="text text_type_digits-medium">610</p>
            <CurrencyIcon widht={33} height={33} type="primary" />
          </div>
          <Button>Оформить заказ</Button>
        </div>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.array,
};

export default BurgerConstructor;

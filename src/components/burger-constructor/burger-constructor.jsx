import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { v4 as uuid4 } from "uuid";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import {
  DELETE_INGREDIENT,
  GET_ORDER_NUMBER,
  getOrderNumber,
} from "../../services/actions/ingredients";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { placeOrder } from "../../utils/api/api";

import styles from "./burger-constructor.module.css";

const BurgerConstructor = () => {
  const { ingredientsData, ingredients } = useSelector(
    (state) => state.ingredients
  );
  const dispatch = useDispatch();

  const bun = ingredientsData.find(({ type }) => type === "bun");
  const [isOpenModal, setOpenModal] = useState(false);

  const getTotalPrice =
    ingredients.reduce((acc, { price }) => acc + price, 0) + bun?.price * 2;

  const handleOpenModal = (data) => {
    setOpenModal(true);
    const ids = data.map(({ id }) => id);
    // placeOrder({ ingredients: [bun._id, ...ids] }).then((data) =>
    //   dispatch({ type: GET_ORDER_NUMBER, payload: data.order.number })
    // );
    dispatch(getOrderNumber({ ingredients: [bun._id, ...ids] }));
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDelete = (id) => {
    dispatch({ type: DELETE_INGREDIENT, payload: id });
  };
  return (
    <>
      <section className={cn(styles.burgerConstructorContainer, "mt-25")}>
        <div className={styles.constructorWrapper}>
          <div className={styles.bunWrapper}>
            <div />
            <div />
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun?.name} (верх)`}
              price={bun?.price}
              thumbnail={bun?.image}
            />
          </div>
          <ul className={styles.ingredientsWrapper}>
            {ingredients
              .filter(({ type }) => type !== "bun")
              .map(({ id, image, name, price }) => (
                <li key={uuid4()} className={styles.ingredientWrapper}>
                  <DragIcon type="primary" />
                  <div />
                  <ConstructorElement
                    text={name}
                    price={price}
                    thumbnail={image}
                    handleClose={() => handleDelete(id)}
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
              text={`${bun?.name} (низ)`}
              price={bun?.price}
              thumbnail={bun?.image}
            />
          </div>
          <div className={cn(styles.priceWrapper, "mt-10")}>
            <div className={styles.price}>
              <p className="text text_type_digits-medium">
                {getTotalPrice ? getTotalPrice : 0}
              </p>
              <CurrencyIcon widht={33} height={33} type="primary" />
            </div>
            <Button onClick={() => handleOpenModal(ingredients)}>
              Оформить заказ
            </Button>
          </div>
        </div>
      </section>
      {isOpenModal && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};

export default BurgerConstructor;

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
import { useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const BurgerConstructor = ({ onDropHandler }) => {
  const { ingredientsData, ingredients, buns } = useSelector(
    (state) => state.ingredients
  );
  const dispatch = useDispatch();

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    drop(itemId) {
      onDropHandler(itemId);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  // const bun = ingredientsData.find(({ type }) => type === "bun");
  const [isOpenModal, setOpenModal] = useState(false);

  const getTotalPrice =
    ingredients.reduce((acc, current) => acc + current?.price, 0) +
    buns?.price * 2;

  const handleOpenModal = (data) => {
    setOpenModal(true);
    const ids = data.map(({ id }) => id);
    dispatch(getOrderNumber({ ingredients: [buns._id, ...ids] }));
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDelete = (id) => {
    dispatch({ type: DELETE_INGREDIENT, payload: id });
  };

  const outline = isHover ? "2px dotted #4c4cff" : "transparent";
  return (
    <>
      <section
        ref={dropTarget}
        className={cn(styles.burgerConstructorContainer, "mt-25")}
      >
        <div style={{ outline }} className={styles.constructorWrapper}>
          <div className={styles.bunWrapper}>
            <div />
            <div />
            {buns && (
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${buns?.name} (верх)`}
                price={buns?.price}
                thumbnail={buns?.image}
              />
            )}
          </div>
          <ul className={styles.ingredientsWrapper}>
            {ingredients
              .filter((ingredient) => ingredient?.type !== "bun")
              .map((ingredient) => (
                <li key={uuid4()} className={styles.ingredientWrapper}>
                  <DragIcon type="primary" />
                  <div />
                  <ConstructorElement
                    text={ingredient?.name}
                    price={ingredient?.price}
                    thumbnail={ingredient?.image}
                    handleClose={() => handleDelete(ingredient?.id)}
                  />
                </li>
              ))}
          </ul>
          <div className={styles.bunWrapper}>
            <div />
            <div />
            {buns && (
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${buns?.name} (низ)`}
                price={buns?.price}
                thumbnail={buns?.image}
              />
            )}
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

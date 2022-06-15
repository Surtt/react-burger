import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { v4 as uuid4 } from "uuid";
import { useDrop } from "react-dnd";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import {
  addBuns,
  addIngredient,
  DELETE_INGREDIENT,
  deleteIngredient,
  getOrderNumber,
  UPDATE_ORDER_INGREDIENTS,
  updateOrderIngredients,
} from "../../services/actions/ingredients";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";

import styles from "./burger-constructor.module.css";

const BurgerConstructor = () => {
  const { ingredientsData, ingredients, buns } = useSelector(
    (state) => state.ingredients
  );
  const dispatch = useDispatch();

  const handleDrop = (itemId) => {
    const targetIngredient = ingredientsData.find(
      ({ _id }) => _id === itemId.id
    );
    const isBun = targetIngredient.type === "bun";

    if (isBun) {
      dispatch(addBuns(targetIngredient));
    } else {
      dispatch(addIngredient({ ...targetIngredient, uuid: uuid4() }));
    }
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    drop(itemId) {
      handleDrop(itemId);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const [isOpenModal, setOpenModal] = useState(false);

  const getTotalPrice = useMemo(() => {
    return (
      ingredients.reduce((acc, current) => acc + current?.price, 0) +
      buns?.price * 2
    );
  }, [ingredients, buns]);

  const handleOpenModal = (data) => {
    setOpenModal(true);
    const ids = data.map(({ id }) => id);
    dispatch(getOrderNumber({ ingredients: [buns._id, ...ids] }));
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteIngredient(id));
  };

  const outline = isHover ? "2px dotted #4c4cff" : "transparent";

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      dispatch(
        updateOrderIngredients({ toIndex: hoverIndex, fromIndex: dragIndex })
      );
    },
    [dispatch]
  );
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
              .map((ingredient, idx) => (
                <BurgerIngredient
                  key={uuid4()}
                  index={idx}
                  ingredient={ingredient}
                  handleDelete={() => handleDelete(ingredient?.uuid)}
                  moveCard={moveCard}
                />
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
          {buns ? (
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
          ) : (
            <p
              className={cn(
                styles.emptyConstructor,
                "text text_type_main-large"
              )}
            >
              Перенесите булки в эту область
            </p>
          )}
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

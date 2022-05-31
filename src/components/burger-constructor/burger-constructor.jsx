import React, { useState, useContext } from "react";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { dataTypes } from "../../utils/dataTypes";
import { DataContext } from "../../utils/dataContext";
import { v4 as uuidv4 } from "uuid";
import { placeOrder } from "../../utils/api/api";

const BurgerConstructor = () => {
  const {
    state: { data, ingredients },
    dispatch,
  } = useContext(DataContext);
  const bun = data.find(({ type }) => type === "bun");
  const [isOpenModal, setOpenModal] = useState(false);

  const handleOpenModal = (data) => {
    setOpenModal(true);
    const ids = data.map(({ id }) => id);
    console.log(ids);
    placeOrder({ ingredients: ids }).then(console.log);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDelete = (id) => {
    dispatch({ type: "deleteIngredient", payload: id });
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
                <li key={uuidv4()} className={styles.ingredientWrapper}>
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
              <p className="text text_type_digits-medium">610</p>
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

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(dataTypes).isRequired),
};

export default BurgerConstructor;

import React, { useState } from "react";
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

const BurgerConstructor = ({ data }) => {
  const bun = data.find(({ type }) => type === "bun");
  const [isOpenModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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
            {data
              .filter(({ type }) => type !== "bun")
              .map(({ _id, image, name, price }) => (
                <li key={_id} className={styles.ingredientWrapper}>
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
            <Button onClick={handleOpenModal}>Оформить заказ</Button>
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      image_large: PropTypes.string.isRequired,
      image_mobile: PropTypes.string.isRequired,
      _v: PropTypes.number,
      calories: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      proteins: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default BurgerConstructor;

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
  deleteIngredient,
  getOrderNumber,
  updateOrderIngredients,
} from "../../services/actions/ingredients";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";

import styles from "./burger-constructor.module.css";
import { useHistory } from "react-router-dom";
import { isEmptyUser } from "../../utils/isEmtyUser";
import { Iingredient } from "../../types";

declare module "react" {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

const BurgerConstructor = () => {
  const history = useHistory();
  const { user } = useSelector((state: any) => state.auth);
  const { ingredientsData, ingredients, buns } = useSelector(
    (state: any) => state.ingredients
  );
  const dispatch = useDispatch();

  const handleDrop = (itemId: { id: string }) => {
    const targetIngredient = ingredientsData.find(
      ({ _id }: { _id: string }) => _id === itemId.id
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
    drop(itemId: { id: string }) {
      handleDrop(itemId);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const [isOpenModal, setOpenModal] = useState(false);

  const getTotalPrice = useMemo(() => {
    return (
      ingredients.reduce(
        (acc: number, current: { price: number }) => acc + current?.price,
        0
      ) +
      buns?.price * 2
    );
  }, [ingredients, buns]);

  const handleOpenModal = (data: Iingredient[]) => {
    if (isEmptyUser(user)) {
      history.push("/login");
    }
    setOpenModal(true);
    const ids = data.map(({ _id }: Iingredient) => _id);
    //@ts-ignore
    dispatch(getOrderNumber({ ingredients: [buns._id, ...ids] }));
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteIngredient(id));
  };

  const outline = isHover ? "2px dotted #4c4cff" : "transparent";

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
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
              .filter((ingredient: Iingredient) => ingredient?.type !== "bun")
              .map((ingredient: Iingredient, idx: number) => (
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
                <CurrencyIcon type="primary" />
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

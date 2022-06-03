import React, { useContext, useMemo } from "react";
import Tabs from "../tabs/tabs";
import Ingredients from "../ingredients/ingredients";
import styles from "./burger-ingredients.module.css";
import cn from "classnames";
import { DataContext } from "../../utils/dataContext";

const BurgerIngredients = () => {
  const {
    state: { data },
  } = useContext(DataContext);
  const buns = useMemo(() => data.filter(({ type }) => type === "bun"), [data]);
  const sauces = useMemo(
    () => data.filter(({ type }) => type === "sauce"),
    [data]
  );
  const mains = useMemo(
    () => data.filter(({ type }) => type === "main"),
    [data]
  );
  return (
    <section className={cn(styles.ingredientsBlockContainer, "mt-10")}>
      <p className="text text_type_main-large">Соберите бургер</p>
      <Tabs />
      <div className={styles.ingredientsContainer}>
        <Ingredients data={buns} title="Булки" />
        <Ingredients data={sauces} title="Соусы" />
        <Ingredients data={mains} title="Начинки" />
      </div>
    </section>
  );
};

export default BurgerIngredients;

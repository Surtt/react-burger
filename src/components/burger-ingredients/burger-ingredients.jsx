import React, { useMemo } from "react";
import Tabs from "../tabs/tabs";
import Ingredients from "../ingredients/ingredients";
import styles from "./burger-ingredients.module.css";
import cn from "classnames";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

const BurgerIngredients = () => {
  const { ingredientsData, ingredientsRequest, ingredientsFailed } =
    useSelector((state) => state.ingredients);

  const buns = useMemo(
    () => ingredientsData.filter(({ type }) => type === "bun"),
    [ingredientsData]
  );
  const sauces = useMemo(
    () => ingredientsData.filter(({ type }) => type === "sauce"),
    [ingredientsData]
  );
  const mains = useMemo(
    () => ingredientsData.filter(({ type }) => type === "main"),
    [ingredientsData]
  );
  const override = {
    display: "block",
    margin: "auto",
  };
  return (
    <section className={cn(styles.ingredientsBlockContainer, "mt-10")}>
      <p className="text text_type_main-large">Соберите бургер</p>
      <Tabs />
      {ingredientsRequest ? (
        <div className={styles.loaderWrapper}>
          <ClipLoader
            color={"#ffffff"}
            loading={ingredientsRequest}
            css={override}
            size={100}
          />
        </div>
      ) : (
        <div className={styles.ingredientsContainer}>
          <Ingredients data={buns} title="Булки" />
          <Ingredients data={sauces} title="Соусы" />
          <Ingredients data={mains} title="Начинки" />
        </div>
      )}
    </section>
  );
};

export default BurgerIngredients;

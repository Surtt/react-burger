import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";
import ClipLoader from "react-spinners/ClipLoader";
import { useInView } from "react-intersection-observer";

import Tabs from "../tabs/tabs";
import Ingredients from "../ingredients/ingredients";

import styles from "./burger-ingredients.module.css";

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

  const [refBuns, inViewBuns] = useInView();
  const [refSauces, inViewSauces] = useInView();
  const [refMains, inViewMains] = useInView();

  const override = {
    display: "block",
    margin: "auto",
  };

  return (
    <section className={cn(styles.ingredientsBlockContainer, "mt-10")}>
      <p className="text text_type_main-large">Соберите бургер</p>
      <Tabs
        inViewBuns={inViewBuns}
        inViewSauces={inViewSauces}
        inViewMains={inViewMains}
      />
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
          <Ingredients ref={refBuns} data={buns} title="Булки" />
          <Ingredients ref={refSauces} data={sauces} title="Соусы" />
          <Ingredients ref={refMains} data={mains} title="Начинки" />
        </div>
      )}
    </section>
  );
};

export default BurgerIngredients;

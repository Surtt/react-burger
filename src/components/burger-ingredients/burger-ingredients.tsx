import React, { useMemo } from "react";
import cn from "classnames";
import { useInView } from "react-intersection-observer";

import Tabs from "../tabs/tabs";
import Ingredients from "../ingredients/ingredients";

import styles from "./burger-ingredients.module.css";
import Loader from "../loader/loader";
import { IIngredient } from "../../types";
import { useSelector } from "../../hooks";

const BurgerIngredients = () => {
  const { ingredientsData, ingredientsRequest } = useSelector(
    (state) => state.ingredients
  );

  const buns = useMemo(
    () =>
      ingredientsData.filter(
        (ingredient: IIngredient) => ingredient.type === "bun"
      ),
    [ingredientsData]
  );
  const sauces = useMemo(
    () =>
      ingredientsData.filter(
        (ingredient: IIngredient) => ingredient.type === "sauce"
      ),
    [ingredientsData]
  );
  const mains = useMemo(
    () =>
      ingredientsData.filter(
        (ingredient: IIngredient) => ingredient.type === "main"
      ),
    [ingredientsData]
  );

  const [refBuns, inViewBuns] = useInView();
  const [refSauces, inViewSauces] = useInView();
  const [refMains, inViewMains] = useInView();

  return (
    <section className={cn(styles.ingredientsBlockContainer, "mt-10")}>
      <p className="text text_type_main-large">Соберите бургер</p>
      <Tabs
        inViewBuns={inViewBuns}
        inViewSauces={inViewSauces}
        inViewMains={inViewMains}
      />
      {ingredientsRequest ? (
        <Loader loading={ingredientsRequest} />
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

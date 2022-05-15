import React, { FC, PropsWithChildren, ReactElement } from "react";
import Tabs from "../tabs/tabs";
import Ingredients from "../ingredients/ingredients";
import styles from "./burger-ingredients.module.css";

declare module "react" {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

interface IBurgerIngredients {
  data: any;
}

const BurgerIngredients: FC<IBurgerIngredients> = ({ data }) => {
  return (
    <section className="mt-10" style={{ width: "50%" }}>
      <p className="text text_type_main-large">Соберите бургер</p>
      <Tabs />
      <div className={styles.ingredientsContainer}>
        <Ingredients data={data} title="Булки" typeIng="bun" />
        <Ingredients data={data} title="Соусы" typeIng="sauce" />
        <Ingredients data={data} title="Начинки" typeIng="main" />
      </div>
    </section>
  );
};

export default BurgerIngredients;

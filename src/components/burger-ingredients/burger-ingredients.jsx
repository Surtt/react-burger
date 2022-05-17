import React from "react";
import Tabs from "../tabs/tabs";
import Ingredients from "../ingredients/ingredients";
import styles from "./burger-ingredients.module.css";
import cn from "classnames";
import PropTypes from "prop-types";

const BurgerIngredients = ({ data }) => {
  return (
    <section className={cn(styles.ingredientsBlockContainer, "mt-10")}>
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

BurgerIngredients.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BurgerIngredients;

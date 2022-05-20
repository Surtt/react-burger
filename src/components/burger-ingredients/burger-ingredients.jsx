import React, { useMemo } from "react";
import Tabs from "../tabs/tabs";
import Ingredients from "../ingredients/ingredients";
import styles from "./burger-ingredients.module.css";
import cn from "classnames";
import PropTypes from "prop-types";

const BurgerIngredients = ({ data }) => {
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

BurgerIngredients.propTypes = {
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

export default BurgerIngredients;

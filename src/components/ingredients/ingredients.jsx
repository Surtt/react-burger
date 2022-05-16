import React from "react";
import cn from "classnames";
import styles from "./ingredients.module.css";
import IngredientCard from "../ingredient/ingredient-card";
import PropTypes from "prop-types";

const Ingredients = ({ data, title, typeIng }) => {
  return (
    <section className="mt-10">
      <p className="text text_type_main-medium mb-6">{title}</p>
      <ul className={cn(styles.ingredientsContainer, "pl-4")}>
        {data
          .filter(({ type }) => type === typeIng)
          .map(({ _id, image, name, price }, idx) => (
            <IngredientCard
              key={_id}
              image={image}
              name={name}
              price={price}
              idx={idx}
            />
          ))}
      </ul>
    </section>
  );
};

Ingredients.propTypes = {
  title: PropTypes.string,
  typeIng: PropTypes.string,
  data: PropTypes.array,
};

export default Ingredients;

import React from "react";
import cn from "classnames";
import styles from "./ingredients.module.css";
import IngredientCard from "../ingredient/ingredient-card";

const Ingredients = ({ data, title, typeIng }) => {
  return (
    <section className="mt-10">
      <p className="text text_type_main-medium mb-6">{title}</p>
      <section className={cn(styles.ingredientsContainer, "pl-4")}>
        {data
          .filter(({ type }) => type === typeIng)
          .map(({ image, name, price }, idx) => (
            <IngredientCard
              key={idx.toString()}
              image={image}
              name={name}
              price={price}
              idx={idx}
            />
          ))}
      </section>
    </section>
  );
};

export default Ingredients;

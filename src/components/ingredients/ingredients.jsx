import React, { useMemo } from "react";
import cn from "classnames";
import styles from "./ingredients.module.css";
import IngredientCard from "../ingredient/ingredient-card";
import PropTypes from "prop-types";

const Ingredients = ({ data, title }) => {
  return (
    <>
      <section className="mt-10">
        <p className="text text_type_main-medium mb-6" id={data[0]?.type}>
          {title}
        </p>
        <ul className={cn(styles.ingredientsContainer, "pl-4")}>
          {data.map(({ _id, image, name, price, ...props }, idx) => (
            <IngredientCard
              key={_id}
              image={image}
              name={name}
              price={price}
              idx={idx}
              {...props}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

Ingredients.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default Ingredients;

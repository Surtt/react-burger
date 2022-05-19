import React from "react";
import cn from "classnames";
import styles from "./ingredients.module.css";
import IngredientCard from "../ingredient/ingredient-card";
import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "../modal/modal";

const Ingredients = ({ data, title, typeIng }) => {
  return (
    <>
      <section className="mt-10">
        <p className="text text_type_main-medium mb-6">{title}</p>
        <ul className={cn(styles.ingredientsContainer, "pl-4")}>
          {data
            .filter(({ type }) => type === typeIng)
            .map(({ _id, image, name, price, ...props }, idx) => (
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
  typeIng: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default Ingredients;

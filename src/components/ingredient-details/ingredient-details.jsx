import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Nutrient from "../nutrient/nutrient";

import styles from "./ingredient-details.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const IngredientDetails = ({ title }) => {
  const { id } = useParams();
  const ingredients = useSelector((state) => state.ingredients.ingredientsData);
  const selectedIngredient = ingredients.find(
    (ingredient) => ingredient._id === id
  );

  return (
    <>
      {selectedIngredient && (
        <div className={styles.container}>
          {title && (
            <h2 className={cn(styles.title, "text text_type_main-large")}>
              {title}
            </h2>
          )}
          <div className={cn(styles.detailIngredientModal, "mb-15")}>
            <img
              src={selectedIngredient.image_large}
              alt={selectedIngredient?.name}
            />
            <p className={cn(styles.name, "text text_type_main-medium mt-4")}>
              {selectedIngredient?.name}
            </p>
            <div className={cn(styles.nutrients, "mt-8")}>
              <Nutrient
                nutrientName="Калории,ккал"
                nutrientGram={selectedIngredient?.calories}
              />
              <Nutrient
                nutrientName="Белки, г"
                nutrientGram={selectedIngredient?.proteins}
              />
              <Nutrient
                nutrientName="Жиры, г"
                nutrientGram={selectedIngredient?.fat}
              />
              <Nutrient
                nutrientName="Углеводы, г"
                nutrientGram={selectedIngredient?.carbohydrates}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

IngredientDetails.propTypes = {
  data: PropTypes.string,
};

export default IngredientDetails;

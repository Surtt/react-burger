import React from "react";
import cn from "classnames";
import Nutrient from "../nutrient/nutrient";
import styles from "./ingredient-details.module.css";

const IngredientDetails = ({ name, ...props }) => {
  return (
    <div className={cn(styles.detailIngredientModal, "mb-15")}>
      <img src={props.image_large} alt={name} />
      <p className={cn(styles.name, "text text_type_main-medium mt-4")}>
        {name}
      </p>
      <div className={cn(styles.nutrients, "mt-8")}>
        <Nutrient nutrientName="Калории,ккал" nutrientGram={props.calories} />
        <Nutrient nutrientName="Белки, г" nutrientGram={props.proteins} />
        <Nutrient nutrientName="Жиры, г" nutrientGram={props.fat} />
        <Nutrient
          nutrientName="Углеводы, г"
          nutrientGram={props.carbohydrates}
        />
      </div>
    </div>
  );
};

export default IngredientDetails;

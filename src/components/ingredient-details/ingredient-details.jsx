import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Nutrient from "../nutrient/nutrient";
import { dataTypes } from "../../utils/dataTypes";

import styles from "./ingredient-details.module.css";

const IngredientDetails = ({ data }) => {
  return (
    <div className={cn(styles.detailIngredientModal, "mb-15")}>
      <img src={data.image_large} alt={data.name} />
      <p className={cn(styles.name, "text text_type_main-medium mt-4")}>
        {data.name}
      </p>
      <div className={cn(styles.nutrients, "mt-8")}>
        <Nutrient nutrientName="Калории,ккал" nutrientGram={data.calories} />
        <Nutrient nutrientName="Белки, г" nutrientGram={data.proteins} />
        <Nutrient nutrientName="Жиры, г" nutrientGram={data.fat} />
        <Nutrient
          nutrientName="Углеводы, г"
          nutrientGram={data.carbohydrates}
        />
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
  data: PropTypes.shape(dataTypes).isRequired,
};

export default IngredientDetails;

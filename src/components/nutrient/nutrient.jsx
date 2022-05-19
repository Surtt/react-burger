import React from "react";
import styles from "./nutrient.module.css";

const Nutrient = ({ nutrientName, nutrientGram }) => {
  return (
    <div className={styles.nutrient}>
      <p className="text text_type_main-default text_color_inactive">
        {nutrientName}
      </p>
      <p className="text text_type_main-default text_color_inactive">
        {nutrientGram}
      </p>
    </div>
  );
};

export default Nutrient;

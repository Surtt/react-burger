import React from "react";
import PropTypes from "prop-types";

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

Nutrient.propTypes = {
  nutrientName: PropTypes.string.isRequired,
  nutrientGram: PropTypes.number.isRequired,
};

export default Nutrient;

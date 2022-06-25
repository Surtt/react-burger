import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./ingredients.module.css";
import IngredientCard from "../ingredient/ingredient-card";
import PropTypes from "prop-types";
import { dataTypes } from "../../utils/dataTypes";
import { Link, useLocation } from "react-router-dom";

const Ingredients = forwardRef(({ data, title }, ref) => {
  const location = useLocation();
  return (
    <>
      <section ref={ref} className="mt-10">
        <p className="text text_type_main-medium mb-6" id={data[0]?.type}>
          {title}
        </p>
        <ul className={cn(styles.ingredientsContainer, "pl-4")}>
          {data.map((item, idx) => (
            <Link
              className={styles.link}
              key={item._id}
              to={{
                pathname: `/ingredients/${item._id}`,
                state: { details: location },
              }}
            >
              <IngredientCard data={item} idx={idx} />
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
});

Ingredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(dataTypes).isRequired),
  title: PropTypes.string.isRequired,
};

export default Ingredients;

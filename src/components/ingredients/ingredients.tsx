import React, { FC, forwardRef } from "react";
import cn from "classnames";
import styles from "./ingredients.module.css";
import IngredientCard from "../ingredient/ingredient-card";
import PropTypes from "prop-types";
import { dataTypes } from "../../utils/dataTypes";
import { Link, useLocation } from "react-router-dom";
import { Iingredient } from "../../types";

interface IIngredients {
  data: IIngredients;
  title: string;
}

const Ingredients: FC<IIngredients> = forwardRef(({ data, title }, ref) => {
  const location = useLocation();
  return (
    <>
      <section ref={ref} className="mt-10">
        <p className="text text_type_main-medium mb-6" id={data[0]?.type}>
          {title}
        </p>
        <ul className={cn(styles.ingredientsContainer, "pl-4")}>
          {data.map((item: Iingredient, idx: number) => (
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

export default Ingredients;

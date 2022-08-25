import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./ingredients.module.css";
import IngredientCard from "../ingredient/ingredient-card";
import { Link, useLocation } from "react-router-dom";
import { IIngredient } from "../../types";

interface IIngredients {
  data: IIngredient[];
  title: string;
}

const Ingredients = forwardRef<HTMLElement, IIngredients>(
  ({ data, title }, ref) => {
    const location = useLocation();
    return (
      <>
        <section ref={ref} className="mt-10">
          <p className="text text_type_main-medium mb-6" id={data[0]?.type}>
            {title}
          </p>
          <ul className={cn(styles.ingredientsContainer, "pl-4")}>
            {data.map((item: IIngredient) => (
              <Link
                className={styles.link}
                key={item._id}
                to={{
                  pathname: `/ingredients/${item._id}`,
                  state: { background: location },
                }}
              >
                <IngredientCard data={item} />
              </Link>
            ))}
          </ul>
        </section>
      </>
    );
  }
);

export default Ingredients;

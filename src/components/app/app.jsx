import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { v4 as uuid4 } from "uuid";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import styles from "./app.module.css";
import {
  ADD_BUNS,
  ADD_INGREDIENT,
  getIngredients,
} from "../../services/actions/ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();
  const { ingredientsData, ingredientsRequest, ingredientsFailed } =
    useSelector((state) => state.ingredients);

  const handleDrop = (itemId) => {
    const targetIngredient = ingredientsData.find(
      ({ _id }) => _id === itemId.id
    );
    const isBun = targetIngredient.type === "bun";

    if (isBun) {
      dispatch({ type: ADD_BUNS, payload: targetIngredient });
    } else {
      dispatch({
        type: ADD_INGREDIENT,
        payload: { ...targetIngredient, _id: uuid4() },
      });
    }
  };

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={cn(styles.main, "pl-5 pr-5")}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor onDropHandler={handleDrop} />
        </DndProvider>
      </main>
    </div>
  );
}

export default App;

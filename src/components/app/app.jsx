import React, { useEffect, useReducer } from "react";
import cn from "classnames";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getData } from "../../utils/api/api";

import styles from "./app.module.css";
import { DataContext } from "../../utils/dataContext";

const initialState = {
  data: [],
  ingredients: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "getIngredients": {
      return { ...state, data: action.payload };
    }
    case "addIngredient": {
      return { ...state, ingredients: [...state.ingredients, action.payload] };
    }
    case "deleteIngredient": {
      return {
        ...state,
        ingredients: [
          ...state.ingredients.filter(({ id }) => id !== action.payload),
        ],
      };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState, undefined);

  useEffect(() => {
    const getIngredients = async () => {
      try {
        const dataIngredients = await getData();
        dispatch({ type: "getIngredients", payload: dataIngredients });
      } catch (e) {
        console.log(e.message);
      }
    };
    getIngredients();
  }, []);

  return (
    <div className={styles.app}>
      <DataContext.Provider value={{ state, dispatch }}>
        <AppHeader />
        <main className={cn(styles.main, "pl-5 pr-5")}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </DataContext.Provider>
    </div>
  );
}

export default App;

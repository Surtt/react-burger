import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import cn from "classnames";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getIngredients } from "../../services/actions/ingredients";

import styles from "./app.module.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={cn(styles.main, "pl-5 pr-5")}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </main>
    </div>
  );
}

export default App;

import React from "react";
import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import cn from "classnames";

import data from "../../utils/data";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={cn(styles.main, "pl-5 pr-5")}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </div>
  );
}

export default App;

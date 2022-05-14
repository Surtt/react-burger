import React from "react";
import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className=" pl-5 pr-5" style={{ display: "flex", columnGap: 40 }}>
        <BurgerIngredients />
        <div></div>
      </main>
    </div>
  );
}

export default App;

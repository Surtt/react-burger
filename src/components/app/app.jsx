import React, { useEffect, useState } from "react";
import cn from "classnames";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import getData from "../../utils/api/api";

import styles from "./app.module.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getIngredients = async () => {
      try {
        const dataIngredients = await getData();
        setData([...dataIngredients]);
      } catch (e) {
        console.log(e.message);
      }
    };
    getIngredients();
  }, []);

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

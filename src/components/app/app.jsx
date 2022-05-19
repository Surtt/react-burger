import React, { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import cn from "classnames";

function App() {
  const baseUrl = "https://norma.nomoreparties.space";
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/ingredients`);
        const ingredientsData = await response.json();
        setData([...ingredientsData.data]);
      } catch (e) {
        console.log(e.message);
      }
    };

    getData();
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

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppHeader from "../app-header/app-header";
import { getIngredients } from "../../services/actions/ingredients";

import styles from "./app.module.css";
import Main from "../../pages/main";
import Login from "../../pages/login/login";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Router>
        <Route path="/" exact={true}>
          <Main />
        </Route>
        <Route path="/login" exact={true}>
          <Login />
        </Route>
      </Router>
    </div>
  );
}

export default App;

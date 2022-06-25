import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";

import AppHeader from "../app-header/app-header";
import { getIngredients } from "../../services/actions/ingredients";

import Main from "../../pages/main/main";
import Login from "../../pages/login/login";
import Registration from "../../pages/registration/registration";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Profile from "../../pages/profile/profile";
import { getUser } from "../../services/actions/auth";
import ProtectedRoute from "../protected-route/protected-route";
import { getCookie } from "../../utils/getCookie";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  let details = location.state && location.state.details;

  useEffect(() => {
    dispatch(getIngredients());
    const isToken = getCookie("token");
    if (isToken) {
      dispatch(getUser());
    }
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <Switch location={details || location}>
        <Route path="/" exact={true}>
          <Main />
        </Route>
        <ProtectedRoute path="/profile" exact={true}>
          <Profile />
        </ProtectedRoute>
        <Route path="/login" exact={true}>
          <Login />
        </Route>
        <Route path="/register" exact={true}>
          <Registration />
        </Route>
        <Route path="/forgot-password" exact={true}>
          <ForgotPassword />
        </Route>
        <Route path="/reset-password" exact={true}>
          <ResetPassword />
        </Route>
        <Route path="/ingredients/:id" exact={true}>
          <IngredientDetails title="Детали ингредиента" />
        </Route>
      </Switch>
      {details && (
        <Route
          path="/ingredients/:id"
          children={
            <Modal title="Детали ингредиента">
              <IngredientDetails />
            </Modal>
          }
        />
      )}
    </>
  );
}

export default App;

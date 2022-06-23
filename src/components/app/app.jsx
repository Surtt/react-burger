import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

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

function App() {
  const dispatch = useDispatch();

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
    </>
  );
}

export default App;

import React, { useEffect } from "react";
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
import { ILocationDetails } from "../../types";
import { useDispatch } from "../../hooks";
import Feed from "../../pages/feed/feed";
import Order from "../order/order";

function App() {
  const location = useLocation<ILocationDetails>();
  const dispatch = useDispatch();

  const background = location.state && location.state.background;

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
      <Switch location={background || location}>
        <Route path="/" exact={true}>
          <Main />
        </Route>
        <ProtectedRoute path="/profile">
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
        <Route path="/feed" exact={true}>
          <Feed />
        </Route>
        <Route path="/feed/:id">
          <Order isModal={false} />
        </Route>
        <Route path="profile/orders/:id" exact={true}>
          <Order isModal={false} />
        </Route>
      </Switch>
      {background && (
        <>
          <Route
            path="/ingredients/:id"
            children={
              <Modal title="Детали ингредиента">
                <IngredientDetails />
              </Modal>
            }
          />
          <Route
            exact={true}
            path="/feed/:id"
            children={
              <Modal>
                <Order isModal />
              </Modal>
            }
          />
          <ProtectedRoute
            exact={true}
            path="/profile/orders/:id"
            children={
              <Modal>
                <Order isModal />
              </Modal>
            }
          />
        </>
      )}
    </>
  );
}

export default App;

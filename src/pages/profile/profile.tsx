import React from "react";

import cn from "classnames";

import styles from "./profile.module.css";
import Loader from "../../components/loader/loader";
import { useSelector } from "../../hooks";
import NavProfile from "../../components/nav-profile/nav-profile";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import FormProfile from "../../components/form-profile/form-profile";
import { ProfileOrdersList } from "../../components/profile-orders-list/profile-orders-list";

import Order from "../../components/order/order";

const Profile = () => {
  const { userRequest } = useSelector((state) => state.auth);
  const { path } = useRouteMatch();

  const isPage = !!useRouteMatch("/profile/orders/:id");

  if (userRequest) {
    return <Loader loading={userRequest} />;
  }
  return (
    <main className={cn(styles.container, "pl-5 pr-5")}>
      {isPage ? (
        <Route path={`${path}/orders/:id`} exact={true}>
          <Order isModal={false} />
        </Route>
      ) : (
        <section className={styles.wrapper}>
          <NavProfile />
          <Switch>
            <Route path={`${path}`} exact={true}>
              <FormProfile />
            </Route>
            <Route path={`${path}/orders`} exact={true}>
              <ProfileOrdersList />
            </Route>
          </Switch>
        </section>
      )}
    </main>
  );
};

export default Profile;

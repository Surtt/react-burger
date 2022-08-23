import React from "react";

import cn from "classnames";

import styles from "./profile.module.css";
import Loader from "../../components/loader/loader";
import { useSelector } from "../../hooks";
import NavProfile from "../../components/nav-profile/nav-profile";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import FormProfile from "../../components/form-profile/form-profile";
import { ProfileOrdersList } from "../../components/profile-orders-list/profile-orders-list";

const Profile = () => {
  const { userRequest } = useSelector((state) => state.auth);

  if (userRequest) {
    return <Loader loading={userRequest} />;
  }

  return (
    <main className={cn(styles.container, "pl-5 pr-5")}>
      <section className={styles.wrapper}>
        <NavProfile />
        <Switch>
          <Route path="/profile" exact={true}>
            <FormProfile />
          </Route>
          <Route path="/profile/orders" exact={true}>
            <ProfileOrdersList />
          </Route>
        </Switch>
      </section>
    </main>
  );
};

export default Profile;

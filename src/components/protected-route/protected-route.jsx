import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../services/actions/auth";

const ProtectedRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  // const init = async () => {
  //   dispatch(getUser());
  // };
  //
  // useEffect(() => {
  //   init();
  // }, []);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;

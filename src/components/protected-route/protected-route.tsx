import React, { FC, ReactNode } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "../../hooks";

interface IProtectedRoute {
  children: ReactNode;
  path: string;
  exact?: boolean;
}

const ProtectedRoute: FC<IProtectedRoute> = ({ children, ...rest }) => {
  const { user } = useSelector((state) => state.auth);

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

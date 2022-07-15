import React, { FC, ReactNode } from "react";
import { Redirect, Route, RouterProps } from "react-router-dom";
import { useSelector } from "react-redux";

interface IProtectedRoute {
  children: ReactNode;
  path: string;
  exact?: boolean;
}

const ProtectedRoute: FC<RouterProps> = ({ children, ...rest }) => {
  const { user } = useSelector((state: any) => state.auth);

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

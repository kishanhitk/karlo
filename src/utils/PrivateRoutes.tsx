import React from "react";
import { auth } from "../firebase/config";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
const PrivateRoute = ({ children, path, ...rest }: any) => {
  const [user, loading] = useAuthState(auth);
  return loading ? (
    <h2>loading...</h2>
  ) : (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: path },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;

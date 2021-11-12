import React from "react";

import { Redirect, Route } from "react-router-dom";
import useAuth from "../../Context/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return (
    <div>
      (
      <Route
        {...rest}
        render={({ location }) =>
          user.displayName ? (
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
    </div>
  );
};

export default PrivateRoute;

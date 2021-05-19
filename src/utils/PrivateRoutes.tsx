/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';

const PrivateRoute = ({ children, path, ...rest }: any) => {
  const [user, loading] = useAuthState(auth);
  return loading ? (
    <h2>loading...</h2>
  ) : (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={() => (user ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: path },
          }}
        />
      ))}
    />
  );
};
export default PrivateRoute;

import React from 'react';
import { Redirect, Route } from 'react-router';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const isLoggedIn = !!localStorage.getItem('jwt');
  return (
    <Route>
      {() =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />
      }
    </Route>
  );
};

export default ProtectedRoute;

import React from 'react';
import { Redirect, Route } from 'react-router';

const ProtectedRoute = ({ component: Component, ...props }) => {
  console.log("logged in in. protected route", props.loggedIn);
  console.log("protected route jwt localStorage", localStorage.getItem('jwt'));
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

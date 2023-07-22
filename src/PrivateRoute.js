// PrivateRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// A dummy authentication check function
const isAuthenticated = () => {
  // Replace with your actual authentication logic
  const token = localStorage.getItem('token');
  return !!token;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;

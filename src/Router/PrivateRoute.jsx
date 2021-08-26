/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ children, ...rest }) {
  const token = useSelector((state) => state?.userData?.token);
  return (
    <Route
      {...rest}
      render={() => (token
        ? children
        : <Redirect to="/" />)}
    />
  );
}

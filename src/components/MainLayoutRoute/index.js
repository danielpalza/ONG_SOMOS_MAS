import React from 'react';
import { Route } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout/MainLayout';

export default function MainLayoutRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      )}
    />
  );
}

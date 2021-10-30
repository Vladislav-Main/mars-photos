import React from 'react';
import { Route, Switch } from 'react-router';
import { StartPage } from '../pages/start-page/StartPage';

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={StartPage} />
    </Switch>
  );
};

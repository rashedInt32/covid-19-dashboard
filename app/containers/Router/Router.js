import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default Routes;

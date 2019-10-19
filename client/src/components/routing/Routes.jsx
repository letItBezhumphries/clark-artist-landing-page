import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Alert from '../layout/Alert';
// import Dashboard from '../dashboard/Dashboard';
// import PrivateRoute from '../routing/PrivateRoute';
// import NotFound from '../layout/NotFound';

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </section>
  );
}

export default Routes;
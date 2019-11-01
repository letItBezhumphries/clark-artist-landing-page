import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navigation/Navbar';
import Landing from './layout/Landing';
import Story from './layout/Story';
import Shop from './layout/Shop';
import AdminDashboard from './admin/AdminDashboard';
import Alert from './UI/Alert';
import Register from './auth/Register';
import Login from './auth/Login';
import PrivateRoute from './routing/PrivateRoute';
import { loadUser } from '../actions/auth';
import { loadGallery, loadImages } from '../actions/admin'; 
import setAuthToken from "../utils/setAuthToken";
//Redux 
import { Provider } from 'react-redux';
import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(loadGallery());
    store.dispatch(loadImages());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
   

          <Route exact path="/" component={Landing} />
    
            <Alert />
            <Switch>
              <PrivateRoute exact path="/admin/upload" component={AdminDashboard} />
              <Route exact path="/story" component={Story} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Landing from './layout/Landing';
import AdminDashboard from './admin/AdminDashboard';
import Alert from './layout/Alert';
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
          <Navbar />
  
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <PrivateRoute exact path="/admin/upload" component={AdminDashboard} />

              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </section>
          {/* <Landing bgImgs={this.state.bgImgs} currentIndex={this.state.currentGalleryIndex}/> */}
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navigation/Navbar';
// import Footer from './layout/Footer';
import Landing from './layout/Landing';
import Routes from './routing/Routes';
import { loadUser } from '../actions/auth';
import { loadGallery, loadImages, loadPortfolios } from '../actions/store'; 
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
    store.dispatch(loadPortfolios());
  }, [loadUser, loadGallery, loadImages, loadPortfolios]);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
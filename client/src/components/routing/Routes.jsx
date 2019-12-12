import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Alert from '../UI/Alert';
import PrivateRoute from './PrivateRoute';
import Story from '../layout/story/Story';
import Shop from '../layout/shop/Shop';
import SelectedArtView from '../layout/shop/SelectedArtView';
import Exhibitions from "../layout/exhibitions/Exhibitions";
import Cart from '../layout/cart/Cart';
import Register from '../auth/Register';
import Login from '../auth/Login';
// import Portfolios from '../layout/portfolios/Portfolios';
// import PortfolioList from '../layout/portfolios/PortfoliosList';
import AdminDashboard from '../admin/AdminDashboard';  

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <PrivateRoute exact path="/admin/upload" component={AdminDashboard} />
        <Route exact path="/story" component={Story} />
        <Route exact path="/shop/artwork/:title" component={SelectedArtView} />
        <Route exact path="/shop/inventory" component={Shop} />
        <Route exact path="/exhibitions" component={Exhibitions} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/shop/cart" component={Cart} />

        {/* <Route exact path="/portfolios/:title">
          <Portfolios />
        </Route>
        <Route exact path="/portfolios">
          <PortfolioList portfolios={loadPortfolios()} />
        </Route> */}
      </Switch>
    </section>
  );
}

export default Routes;

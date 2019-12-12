import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch } from 'react-router-dom';
import Spinner from '../../UI/Spinner';

import FeaturedGallery from './FeaturedGallery';
import SelectedArtView from './SelectedArtView';


const Shop = ({ 
  auth,
  store: { images, image, portfolio, portfolios, loading }, match, history
}) => {

  return (
    <Fragment>
      <section className="shop">
        { loading ? (
          <Spinner />
          ) : (
          <Switch>
            <Route path={'/shop/artwork' + "/:id"} component={SelectedArtView}/>
            <Route path={match.url} exact component={FeaturedGallery} />
          </Switch>
        )}
      </section>

    </Fragment>
  );
}

Shop.propTypes = {
  auth: PropTypes.object.isRequired,  
}

const mapStateToProps = state => ({
  store: state.store,
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps)(Shop));

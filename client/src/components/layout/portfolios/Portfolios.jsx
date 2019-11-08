import React, { Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PortfoliosList from './PortfoliosList';
import { getPortfolioImages } from '../../../actions/store';



const Portfolios = ({ portfolios, getPortfolioImages }) => {
  
  return (
    <Fragment>
      <section className="portfolios">
        <h1 className="heading-primary--main u-margin-top-medium">
          View my Collections &dArr;
        </h1>
        <PortfoliosList portfolios={portfolios} />
      </section>
    </Fragment>
  );
}

Portfolios.propTypes = {
  portfolios: PropTypes.array.isRequired,
  getPortfolioImages: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  portfolios: state.store.portfolios,
  currentPortfolio: state.store.currentPortfolio
});

export default connect(mapStateToProps, { getPortfolioImages })(Portfolios);
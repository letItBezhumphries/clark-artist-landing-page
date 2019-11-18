import React, { Fragment, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PortfoliosList from "./PortfoliosList";
import PortfolioBoard from "./PortfolioBoard";
import Spinner from "../../UI/Spinner";
import { getPortfolio } from "../../../actions/store";

//portfolios is an array where each element is a portfolio object

const Portfolios = ({
  store: { portfolios, portfolio, loading },
  getPortfolio,
  ...props
}) => {
  const { title } = useParams();

  useEffect(() => {
    getPortfolio(title.slice(1));
  }, [getPortfolio, title]);


  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className="portfolio">
        {portfolio !== null ? (
          <Fragment>
            <PortfolioBoard portfolio={portfolio} />
            {/* <PortfoliosList portfolios={portfolios} /> */}
          </Fragment>
        ) : (
          <Fragment>
            <PortfoliosList portfolios={portfolios} />
          </Fragment>
        )}
      </section>
    </Fragment>
  );
};

Portfolios.propTypes = {
  store: PropTypes.object.isRequired,
  getPortfolio: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  store: state.store
});

export default connect(
  mapStateToProps,
  { getPortfolio }
)(Portfolios);

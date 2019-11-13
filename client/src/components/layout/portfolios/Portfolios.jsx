import React, { Fragment, useEffect } from "react";
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
  useEffect(() => {
    getPortfolio(props.match.url.split("/")[1]);
  }, [getPortfolio]);

  console.log("props in Portfolios", props.match.url);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className="portfolios">
        {portfolio !== null ? (
          <Fragment>
            <PortfolioBoard portfolio={portfolio} />
            <PortfoliosList portfolios={portfolios} />
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
  getPortfolioImages: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  store: state.store
});

export default connect(
  mapStateToProps,
  { getPortfolio }
)(Portfolios);

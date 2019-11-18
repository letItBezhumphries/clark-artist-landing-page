import React, { Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PortfolioConcept = ({ profile }) => {
  return (
    <Fragment>
      <blockquote className="portfolio__concept-card">
        <p className="portfolios__concept-quote">
          “Information is not knowledge. Knowledge is not wisdom. Wisdom is not
          truth. Truth is not beauty. Beauty is not love. Love is not music.
          Music is THE BEST.”
        </p>
        <cite className="portfolio__concept-citation">
          — Frank Zappa
        </cite>
      </blockquote>
    </Fragment>
  );
}

PortfolioConcept.propTypes = {
  portfolio: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  portfolio: state.store.portfolio,
});

export default connect(mapStateToProps)(PortfolioConcept);

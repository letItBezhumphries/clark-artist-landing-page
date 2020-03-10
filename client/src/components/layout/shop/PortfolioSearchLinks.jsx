import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ImageCard from '../../UI/ImageCard';
import { searchByPortfolio } from '../../../actions/shop';

const PorfolioSearchLinks = ({ portfolios, searchByPortfolio }) => {
  let history = useHistory();

  let portfolioList = portfolios.map(portfolio => (
    <Link
      to={`/shop/collection/${portfolio.title}`}
      key={portfolio.title}
      onClick={() => searchByPortfolio(portfolio, portfolio.images[0]._id)}
      style={{ textDecoration: "none" }}
    >
      <ImageCard
        portfolio={portfolio}
        title={portfolio.title}
        image={portfolio.images[0]}
        cardType="portfolioCard"
      />
    </Link>
  ));
  return (
    <Fragment>
      <h2 className="shop__search-heading" style={{ marginTop: '8rem', marginBottom: '2rem' }}>FEATURED COLLECTIONS</h2>
      <div className="portfolioLinks-row">{portfolioList}</div>
    </Fragment>
  );
};

PorfolioSearchLinks.propTypes = {
  portfolios: PropTypes.array.isRequired,
  searchByPortfolio: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  portfolios: state.admin.portfolios,
});

export default connect(mapStateToProps, { searchByPortfolio })(PorfolioSearchLinks);
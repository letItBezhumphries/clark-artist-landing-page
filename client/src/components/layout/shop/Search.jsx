import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Icon from '../../UI/Icon';
import { searchByTitle } from '../../../actions/shop';

const Search = ({
  shop: { loading, search, image },
  searchByTitle
}) => {
  let history = useHistory();
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    console.log("[Search.jsx] useEffect searchTitle:", searchTitle);
    return () => {
      console.log("[Search.jsx] cleaning up");
    };
  }, [searchTitle, search]);

  const handleSubmit = async e => {
    e.preventDefault();
    await searchByTitle(searchTitle, history);
    setSearchTitle("");
  };

  return (
    <div className="shop__search-box">
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h2 className="shop__search-heading">Search the Inventory:</h2>
          <form className="shop__search" onSubmit={e => handleSubmit(e)}>
            <input
              type="text"
              className="shop__search search__input"
              placeholder="Search inventory"
              id="title"
              value={searchTitle}
              onChange={e => setSearchTitle(e.target.value)}
            />
            <button className="shop__search search__button">
              <Icon iconType="icon-search" class="shop__search search__icon" />
            </button>
          </form>
        </Fragment>
      )}
    </div>
  );
};

Search.propTypes = {
  searchByTitle: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  shop: state.shop
})

export default connect(mapStateToProps, { searchByTitle })(Search);

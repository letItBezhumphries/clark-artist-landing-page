import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import PropTypes from "prop-types";
import { getSelectedArtwork } from '../../actions/shop';
import ImageLink from '../UI/ImageLink';


const DropdownItem = ({ item, getSelectedArtwork }) => {
  let history = useHistory();
  const { _id, title, year, price, imageUrl, description } = item;
  console.log(
    "inside DROPDOWNITEM, item:",
    item,
    "to:",
    `/shop/artwork/${_id}`
  );
  

  return (
    <Fragment>
      <li
        item={item}
        className="navbar__dropdown-cartlist-item"
      >
        <ImageLink
          image={item}
          clicked={() => getSelectedArtwork(item._id)}
          to={`/shop/artwork/${_id}`}
          type="dropdown"
          style={{ borderBottom: '2px solid black'}}
          classType="navbar__dropdown-cart-item"
        />
      </li>
    </Fragment>
  );
}

DropdownItem.propTypes = {
  cart: PropTypes.object.isRequired,
  getSelectedArtwork: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart
});


export default connect(mapStateToProps, { getSelectedArtwork })(
  withRouter(DropdownItem)
);
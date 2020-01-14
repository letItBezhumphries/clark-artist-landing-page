import React, { Fragment, useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from '../../UI/Icon';


const Search = (onSearch) => {
  const [text, setText] = useState("");

  return (
    <Fragment>
      <div className="shop__search-box">
      Search
        {/* <h2 className="shop__search-heading">Search the Inventory:</h2>
        <form className="shop__search" 
              onSubmit={e => {
                e.preventDefault();
                onSearch({ text });
                setText("")
              }
        }>
          <input
            type="text"
            className="shop__search search__input"
            placeholder="Search inventory"
            value={text}
            onChange={e => setText(e.target.value)}
          /> */}
          <input className="shop__search search__button" type="submit" value="Submit">
            <Icon iconType="icon-search" class="shop__search search__icon" />
          </input>
        {/* </form> */}
      </div>
    </Fragment>
  );
}

// Search.propTypes = {

// }

// const mapStateToProps = state => ({
//   shop: state.shop
// })

export default connect(Search);

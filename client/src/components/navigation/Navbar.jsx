import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import DropdownList from './DropdownList';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Logo from './Logo';
import { logout } from '../../actions/auth';
import Icon from '../UI/Icon';

const Navbar = ({ auth: { isAuthenticated, isAdmin, loading }, logout, portfolios }) => {

  const adminLinks = (
    <div className="navbar__links">
      <Link to="/admin/bio" className="navbar__link">
        bio
      </Link>
      <DropdownList />
      <Link to="/exhibitions" className="navbar__link">
        exhibitions
      </Link>
      <Link to="/admin/shop" className="navbar__link">
        shop
      </Link>
      <Link to="/admin/upload" className="navbar__link">
        artwork
      </Link>
      <Link to="/logout" className="navbar__link" onClick={logout}>
        logout
      </Link>
    </div>
  );
  
  const shopAuthLinks = (
    <div className="navbar__links">
      <Link to="/story" className="navbar__link">
        about
      </Link>
      <DropdownList />
      <Link to="/exhibitions" className="navbar__link">
        exhibitions
      </Link>
      <Link to="/shop" className="navbar__link">
        inventory
      </Link>
      <Link to="/cart" className="navbar__link">
        <Icon
          iconType="icon-shopping-cart1"
          class="navbar__icon"
        />
      </Link>
      <Link to="/account" className="navbar__link">
        account
      </Link>
      <Link to="/logout" className="navbar__link" onClick={logout}>
        logout
      </Link>
    </div>
  );

  const unAuthorizedLinks = (
    <div className="navbar__links">
      <Link to="/story" className="navbar__link">
        about
      </Link>
      <DropdownList />
      <Link to="/exhibitions" className="navbar__link">
        exhibitions
      </Link>
      <Link to="/shop" className="navbar__link">
        inventory
      </Link>
      <Link to="/login" className="navbar__link">
        login
      </Link>
      <Link to="/register" className="navbar__link">
        sign up
      </Link>
      <Link to="/cart" className="navbar__link">
        <Icon
          iconType="icon-shopping-cart1"
          class="navbar__icon"
        />
      </Link>
    </div>
  );
  
  return (
    <nav className="navbar">    
      <Logo/>
        { !loading && isAdmin ? (<Fragment>{adminLinks}</Fragment>): 
          !loading && isAuthenticated ? (<Fragment>{shopAuthLinks}</Fragment>):
          (<Fragment>{unAuthorizedLinks}</Fragment>)
        }
    </nav>
  )
}


Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  portfolios: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  portfolios: state.store.portfolios
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);

import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import DropdownList from './DropdownList';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, isAdmin, loading }, logout }) => {

  const adminLinks = (
    <ul className="navbar__links">
      <Link to="admin/bio" className="navbar__link">
        bio
      </Link>
      <DropdownList />
      <Link to="admin/shop" className="navbar__link">
        shop
      </Link>
      <Link to="admin/artwork" className="navbar__link">
        artwork
      </Link>
      <Link to="/logout" className="navbar__link" onClick={logout}>
        logout
      </Link>
    </ul>
  );
  
  const shopAuthLinks = (
    <ul className="navbar__links">
      <Link to="/story" className="navbar__link">
        story
      </Link>
      <DropdownList />
      <Link to="/shop" className="navbar__link">
        shop
      </Link>
      <Link to="/cart" className="navbar__link">
        cart
      </Link>
      <Link to="/profile" className="navbar__link">
        profile
      </Link>
      <Link to="/logout" className="navbar__link" onClick={logout}>
        logout
      </Link>
    </ul>
  );

  const unAuthorizedLinks = (
    <ul className="navbar__links">
      <Link to="/story" className="navbar__link">story</Link>
      <DropdownList/>
      <Link to="/shop" className="navbar__link">shop</Link>
      <Link to="/login" className="navbar__link">login</Link>
      <Link to="/register" className="navbar__link">sign up</Link>
    </ul>
  );
  
  return (
    <header className="navbar">
      <div className="navbar__artist">
        <Link to="/dashboard" className="home-link">
          <span className="name-first">Todd</span>
          <span className="name-last">Clark</span>
        </Link>
      </div>

        { !loading && isAdmin ? (<Fragment>{adminLinks}</Fragment>): 
          !loading && isAuthenticated ? (<Fragment>{shopAuthLinks}</Fragment>):
          (<Fragment>{unAuthorizedLinks}</Fragment>)
        }
    </header>
  )
}


Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);

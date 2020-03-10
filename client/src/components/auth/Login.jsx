import React, { Fragment, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";


const Login = ({ login, isAuthenticated, adminRole, check_login, location }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [remember, setRemember] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password, location);
  };
  
  const onRememberToggle = (remember) => setRemember(!remember);

  if (isAuthenticated && adminRole === true) {
    return <Redirect to="/admin/upload" />;
  } 
  if (isAuthenticated && adminRole === false && location.pathname !== "/checkout") {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      { location.pathname === "/checkout" ? (
        <form className="form check-login-form" onSubmit={e => onSubmit(e)}>
          <div className="check-login-form__entrance-text">
            <p className="check-login-form__text">
              If you have shopped with us before, please enter your details
              below to login. If you are a new customer, please proceed to the
              Billing section.
            </p>
          </div>
          <div className="form-row">
            <p className="form-row__col-1">
              <input
                type="email"
                placeholder="Username or email"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                required
              />
            </p>
            <p className="form-row__col-2">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={e => onChange(e)}
                minLength="6"
              />
            </p>
            <div className="form-row">
              <p className="form-row__col-1-of-1">
                <label
                  htmlFor="rememberMe"
                  className="form-row__label-for-checkbox"
                >
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    className="form-row__input-checkbox"
                    checked={remember}
                    onChange={() => handleRememberToggle(remember)}
                  />
                  <span>Remember me</span>
                  <input
                    type="submit"
                    className="button button-white"
                    value="Login"
                    placeholder="Login"
                  />
                  <Link
                    to="/my-account/lost-password"
                    className="btn-lost-password"
                    style={{ textDecoration: "none" }}
                  >
                    Lost your password?
                  </Link>
                </label>
              </p>
            </div>
          </div>
        </form>
      ) : (
        <section className="login-form">
          <h1 className="large text-primary">Sign In</h1>
          <p className="lead">
            <i className="fas fa-user" /> Sign Into Your Account
          </p>
          <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={e => onChange(e)}
                minLength="6"
              />
            </div>
            <input type="submit" className="btn btn-primary" value="Login" />
          </form>
          <p className="my-1">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </section>
      )}
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  adminRole: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  adminRole: state.auth.isAdmin
});

export default connect(
  mapStateToProps,
  { login }
)(Login);

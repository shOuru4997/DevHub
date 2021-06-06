import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logoutUser } from "../../redux/auth/auth.actions";

import "./Navbar.styles.css";

const Navbar = ({ auth, logoutUser }) => {
  const [isActive, setIsActive] = useState(false);

  const isLoggedOut = (
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Link className="button has-text-grey" to="/signin" id="signin-btn">
            Sign In
          </Link>
          <Link className="button primary-bg" to="/signup" id="signup-btn">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );

  const isLoggedIn = (
    <>
      <div className="navbar-start">
        <Link to="/posts" className="navbar-item">
          All Posts
        </Link>
        <Link to="/feed" className="navbar-item">
          My Feed
        </Link>
        <Link to="/profiles" className="navbar-item">
          Developers
        </Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <a href="#!" className="navbar-link">
            <img src={auth.user && auth.user.avatar} alt="User avatar" />
            <span>My Profile</span>
          </a>
          <div className="navbar-dropdown">
            <Link to="/dashboard" className="navbar-item">
              Dashboard
            </Link>
            <a href="#!" onClick={logoutUser} className="navbar-item">
              Logout
            </a>
          </div>
        </div>
        <Link className="button primary-bg" to="/posts/new" id="signup-btn">
          Upload
        </Link>
      </div>
    </>
  );

  return (
    <nav
      id="navbar"
      className="navbar container"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          Devhub
        </Link>

        <button
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="dropdownMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div
        id="dropdownMenu"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        {!auth.loading && (
          <>{auth.isAuthenticated ? isLoggedIn : isLoggedOut}</>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);

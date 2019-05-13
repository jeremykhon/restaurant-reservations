import React from 'react';
import { Link } from 'react-router-dom';

const LoggedIn = (jwt) => {
  if (jwt) {
    return (
      <div className="nav-link">
        Logout
      </div>
    );
  }
  return (
    <div className="nav-bar-right">
      <div className="nav-link">
        login
      </div>
      <div className="nav-link">
        sign up
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="container-fluid nav-bar">
      <div className="nav-bar-left">
        <div>
          <Link exact className="nav-link" to="/">
            Home
          </Link>
        </div>
      </div>
      <div className="nav-bar-right">
        {LoggedIn(localStorage.getItem('jwt'))}
      </div>
    </div>
  );
};

export default Navbar;

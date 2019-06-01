import React from 'react';
import { Link } from 'react-router-dom';
import logoSmall from 'images/logo_small.svg';

const loggedIn = ({user, openLogInModal, openSignUpModal, logOut}) => {
  if (user) {
    return (
      <div className="nav-bar-right">
        <Link className="nav-link" to="/reservations">
          My Reservations
        </Link>
        <div className="nav-link log-out" onClick={logOut}>
          Log out
        </div>
      </div>
    );
  }
  return (
    <div className="nav-bar-right">
      <div className="nav-link log-in" onClick={openLogInModal}>
        log in
      </div>
      <div className="nav-link sign-up" onClick={openSignUpModal}>
        sign up
      </div>
    </div>
  );
};

const Navbar = (props) => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
        <div>
          <Link className="nav-link" to="/">
            <img src={logoSmall} alt="small-logo" />
          </Link>
        </div>
      </div>
      <div className="nav-bar-right">
        {loggedIn(props)}
      </div>
    </div>
  );
};

export default Navbar;

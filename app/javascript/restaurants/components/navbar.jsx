import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import logoSmall from 'images/logo_small.svg';
import AuthenticationModal from './authentication_modal';
import modalStyles from '../utils/modal_styles';


Modal.setAppElement('#root');

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };
  }

  openLogInModal = () => {
    this.setState({ modalIsOpen: true, loggingIn: true });
  };

  openSignUpModal = () => {
    this.setState({ modalIsOpen: true, loggingIn: false });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  loggedIn = (loggedIn) => {
    if (loggedIn) {
      return (
        <div className="nav-bar-right">
          <Link className="nav-link" to="/reservations">
            My Reservations
          </Link>
          <div className="nav-link log-out" onClick={this.props.logOut}>
            Log out
          </div>
        </div>
      );
    }
    return (
      <div className="nav-bar-right">
        <div className="nav-link log-in" onClick={this.openLogInModal}>
          log in
        </div>
        <div className="nav-link sign-up" onClick={this.openSignUpModal}>
          sign up
        </div>
      </div>
    );
  };

  render() {
    const { loggedIn } = this.props
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
          {this.loggedIn(loggedIn)}
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Sign in or up modal"
          style={modalStyles}
        >
          <AuthenticationModal 
            logIn={this.props.logIn}
            loggingIn={this.state.loggingIn}
            closeModal={this.closeModal}
          />
        </Modal>
      </div>
    );
  }
}

export default Navbar;

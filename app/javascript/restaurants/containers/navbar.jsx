import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import LoginSignUpModal from './login_sign_up_modal'

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      loggingIn: false,
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

  loggedIn = (jwt) => {
    if (jwt) {
      return (
        <div className="nav-link log-out">
          Logout
        </div>
      );
    }
    return (
      <div className="nav-bar-right">
        <div className="nav-link log-in" name="log-in" onClick={this.openLogInModal}>
          login
        </div>
        <div className="nav-link sign-up" onClick={this.openSignUpModal}>
          sign up
        </div>
      </div>
    );
  };

  modal

  render () {
    return (
      <div className="container-fluid nav-bar">
        <div className="nav-bar-left">
          <div>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </div>
        </div>
        <div className="nav-bar-right">
          {this.loggedIn(localStorage.getItem('jwt'))}
        </div>
        <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Sign in or up modal"
            style={modalStyles}
          >
            <LoginSignUpModal loggingIn={this.state.loggingIn} />
          </Modal>
      </div>
    );
  }
};

export default Navbar;

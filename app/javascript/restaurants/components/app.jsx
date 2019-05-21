import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios';
import history from '../utils/history';
import RestaurantPage from './restaurant_page';
import MainPage from './main_page';
import Navbar from './navbar';
import BASE_URL from '../utils/base_url';
import RestaurantAdminPage from './restaurant_admin_page';
import ReservationsPage from './reservations_page';
import AuthenticationModal from './authentication_modal';
import modalStyles from '../utils/modal_styles';

Modal.setAppElement('#root');

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: localStorage.getItem('jwt') ? true : false,
      user: null,
      modalIsOpen: false,
      loggingIn: true,
    };
  }

  componentDidMount() {
    this.getUser();
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

  getUser = () => {
    const { loggedIn } = this.state;
    if (loggedIn) {
      const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
      axios.get(`${BASE_URL}/return_user`, {
        headers: {
          'X-CSRF-Token': csrfToken,
          'jwt': localStorage.getItem('jwt'),
        },
      }).then(response => this.setState({ user: response.data }));
    }
  }

  logIn = () => {
    this.setState({ loggedIn: true });
    this.getUser();
  }

  logOut = () => {
    localStorage.clear();
    this.setState({ loggedIn: false, user: null });
  }

  render() {
    const {
      loggedIn, user, modalIsOpen, loggingIn,
    } = this.state;
    return (
      <Router history={history}>
        <Navbar
          loggedIn={loggedIn}
          user={user}
          openLogInModal={this.openLogInModal}
          openSignUpModal={this.openSignUpModal}
          logOut={this.logOut}
        />
        <div className="navbar-div" />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <MainPage loggedIn={loggedIn} user={user} {...props} />
            )}
          />
          <Route
            path="/restaurants/:restaurant/admin"
            render={props => (
              <RestaurantAdminPage loggedIn={loggedIn} user={user} {...props} />
            )}
          />
          <Route
            path="/restaurants/:restaurant"
            render={props => (
              <RestaurantPage openLogInModal={this.openLogInModal} loggedIn={loggedIn} user={user} {...props} />
            )}
          />
          <Route
            exact
            path="/reservations"
            render={props => (
              <ReservationsPage loggedIn={loggedIn} user={user} {...props} />
            )}
          />
        </Switch>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Sign in or up modal"
          style={modalStyles}
        >
          <AuthenticationModal
            logIn={this.logIn}
            loggingIn={loggingIn}
            closeModal={this.closeModal}
          />
        </Modal>
      </Router>
    );
  }
}
export default App;

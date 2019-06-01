import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Modal from 'react-modal';
import history from '../utils/history';
import RestaurantPage from './restaurant_page';
import MainPage from './main_page';
import Navbar from './navbar';
import RestaurantAdminPage from './restaurant_admin_page';
import ReservationsPage from './reservations_page';
import AuthenticationModal from './authentication_modal';
import modalStyles from '../utils/modal_styles';
import ScrollToTop from './scroll_to_top';
import { fetchUser } from '../actions/authentication';

Modal.setAppElement('#root');

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      modalIsOpen: false,
      loggingIn: true,
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      fetchUser(jwt)
        .then(response => this.setState({ user: response.data }))
        .catch(error => console.log(error));
    }
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

  logOut = () => {
    localStorage.clear();
    this.setState({ user: null });
  }

  render() {
    const {
      loggedIn, user, modalIsOpen, loggingIn,
    } = this.state;
    return (
      <Router history={history}>
        <ScrollToTop>
          <Navbar
            user={user}
            openLogInModal={this.openLogInModal}
            openSignUpModal={this.openSignUpModal}
            logOut={this.logOut}
            fetchUser={this.fetchUser}
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
        </ScrollToTop>
      </Router>
    );
  }
}
export default App;

import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../utils/history';
import RestaurantPage from './restaurant_page';
import MainPage from './main_page';
import Navbar from './navbar';
import BASE_URL from '../utils/base_url';
import RestaurantAdminPage from './restaurant_admin_page';
import ReservationsPage from './reservations_page';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: localStorage.getItem('jwt') ? true : false,
      user: null,
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    if (this.state.loggedIn) {
      const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
      fetch(`${BASE_URL}/return_user`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
          'jwt': localStorage.getItem('jwt'),
        },
      }).then(response => response.json())
        .then(data => this.setState({ user: data }));
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
    const { loggedIn, user } = this.state;
    return (
      <Router history={history}>
        <Navbar loggedIn={loggedIn} logIn={this.logIn} logOut={this.logOut} user={user} />
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
              <RestaurantPage loggedIn={loggedIn} user={user} {...props} />
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
      </Router>
    );
  }
}
export default App;

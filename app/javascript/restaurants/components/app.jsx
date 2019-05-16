import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RestaurantPage from './restaurant_page';
import MainPage from './main_page';
import Navbar from './navbar';
import BASE_URL from '../utils/base_url';

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
        .then(data => console.log(data));
    }
  }

  logIn = () => {
    this.setState({ loggedIn: true });
    this.getUser();
  }

  logOut = () => {
    localStorage.clear()
    this.setState({ loggedIn: false, user: null });
  }

  render() {
    return (
      <Router>
        <Navbar loggedIn={this.state.loggedIn} logIn={this.logIn} logOut={this.logOut} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <MainPage loggedIn={this.state.loggedIn} {...props} />
            )}
          />
          <Route
            path="/restaurants/:restaurant"
            render={props => (
              <RestaurantPage loggedIn={this.state.loggedIn} {...props} />
            )}
          />
          <Route
            path="/restaurants/:restaurant/admin"
            render={props => (
              <RestaurantAdmin loggedIn={this.state.loggedIn} {...props} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}
export default App;

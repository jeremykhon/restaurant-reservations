import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RestaurantPage from './restaurant_page';
import MainPage from './main_page';
import Navbar from './navbar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: localStorage.getItem('Authorization') ? true : false,
    };
  }

  logIn = () => {
    this.setState({ loggedIn: true }) 
  }

  logOut = () => {
    localStorage.clear()
    this.setState({ loggedIn: false }) 
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
        </Switch>
      </Router>
    );
  }
}
export default App;

// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './containers/app';
import RestaurantPage from './containers/restaurant_page';

// internal modules
const root = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/restaurants/:restaurant" component={RestaurantPage} />
    </Switch>
  </Router>,
  root,
);

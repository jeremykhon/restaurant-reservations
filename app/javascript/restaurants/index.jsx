// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RestaurantPage from './containers/restaurant_page';
import RestaurantList from './containers/restaurant_list';

// internal modules
const root = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={RestaurantList} />
      <Route path="/restaurants/:restaurant" component={RestaurantPage} />
    </Switch>
  </Router>,
  root,
);

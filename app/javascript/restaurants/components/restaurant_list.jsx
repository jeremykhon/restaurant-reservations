import React, { Component } from 'react';
import Restaurant from './restaurant';
import BASE_URL from '../utils/base_url';

class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
    fetch(`${BASE_URL}/restaurants`)
      .then(response => response.json())
      .then(data => this.setState({ restaurants: data }));
  }

  render() {
    const { restaurants } = this.state;
    return (
      <div className="container">
        <div className="row">
          {restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} />)}
        </div>
      </div>
    );
  }
}
export default RestaurantList;

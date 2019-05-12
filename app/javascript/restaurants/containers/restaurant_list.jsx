import React, { Component } from 'react';
import Restaurant from './restaurant';

const BASE_URL = '/api/v1';

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
        {restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} />)}
      </div>
    );
  }
}
export default RestaurantList;

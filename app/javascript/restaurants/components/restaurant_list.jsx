import React, { Component } from 'react';
import RestaurantCard from './restaurant_card';
import RestaurantLoadingCard from './restaurant_loading_card';
import { fetchRestaurants } from '../actions/restaurant';

class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
    fetchRestaurants()
      .then(response => this.setState({ restaurants: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    const { restaurants } = this.state;
    if (restaurants.length === 0) {
      return (
        <div className="row">
          {[...Array(12).keys()].map(number => <RestaurantLoadingCard key={number} />)}
        </div>
      );
    }
    return (
      <div className="row">
        {restaurants.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)}
      </div>
    );
  }
}
export default RestaurantList;

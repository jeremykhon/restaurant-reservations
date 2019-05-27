import React, { Component } from 'react';
import axios from 'axios';
import RestaurantCard from './restaurant_card';
import RestaurantLoadingCard from './restaurant_loading_card';
import BASE_URL from '../utils/base_url';

class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/restaurants`)
      .then(response => this.setState({ restaurants: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    const { restaurants } = this.state;
    if (restaurants.length === 0) {
      return (
        <div className="row">
          {[...Array(12).keys()].map(() => <RestaurantLoadingCard />)}
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

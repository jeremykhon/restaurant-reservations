import React, { Component } from 'react';
import axios from "axios";
import Restaurant from './restaurant';
import BASE_URL from '../utils/base_url';
import { ServerResponse } from 'http';

class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/restaurants`)
      .then(response => this.setState({ restaurants: response.data }));
  }

  render() {
    const { restaurants } = this.state;
    return (
      <div className="row">
        {restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} />)}
      </div>
    );
  }
}
export default RestaurantList;

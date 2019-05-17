import React, { Component } from 'react';
import axios from "axios";
import BASE_URL from '../utils/base_url';

class RestaurantPhotos extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    const { restaurant } = this.props;
    axios.get(`${BASE_URL}/restaurants/${restaurant.id}/restaurant_photos`)
      .then(response => console.log(response.data));
  }

  render() {
    return (
      <div>
        photos
      </div>
    );
  }
}
export default RestaurantPhotos;

// this.setState({ photos: response.data }

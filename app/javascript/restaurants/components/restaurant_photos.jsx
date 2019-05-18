/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import axios from "axios";
import BASE_URL from '../utils/base_url';

const RestaurantPhoto = ({ photo }) => {
  if (photo) {
    return (
      <div className="restaurant-photo" style={{ backgroundImage: `url(${photo.photo.url})` }} />
    );
  }
  return (
    <div className="restaurant-no-photo" />
  );
};

class RestaurantPhotos extends Component {
  render() {
    const { photos } = this.props;
    return (
      <div className="restaurant-photos-container">
        <div className="restaurant-photos-left">
          <div className="photo-1">
            <RestaurantPhoto photo={photos[0]} />
          </div>
        </div>
        <div className="restaurant-photos-right">
          <div className="photo-2">
            <RestaurantPhoto photo={photos[1]} />
          </div>
          <div className="photo-3">
            <RestaurantPhoto photo={photos[2]} />
          </div>
          <div className="photo-4">
            <RestaurantPhoto photo={photos[3]} />
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantPhotos;

// this.setState({ photos: response.data }

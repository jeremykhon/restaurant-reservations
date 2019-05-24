import React, { Component } from 'react';
import axios from 'axios';
import BASE_URL from '../utils/base_url';
import history from '../utils/history';
import RestaurantPhotoWithTimeSlots from './restaurant_photo_with_time_slots';
import StarsWithGradient from './stars_with_gradient';
import PriceLevel from './price_level';

class RestaurantCard extends Component {
  constructor() {
    super();
    this.state = {
      timeSlotsToday: [],
      timeSlotOpacity: 0.5,
    };
  }

  componentDidMount() {
    const { restaurant } = this.props;
    const start = new Date().setHours(0, 0, 0, 0);
    const end = new Date().setHours(23, 59, 59, 999);
    axios.get(`${BASE_URL}/restaurants/${restaurant.id}/time_slots?start=${start}&end=${end}`)
      .then(response => this.setState({ timeSlotsToday: response.data }));
  }

  linkToRestaurant = () => {
    const { restaurant } = this.props;
    history.push(`/restaurants/${restaurant.id}`);
  }

  onHoverIn = () => {
    this.setState({ timeSlotOpacity: 1 });
  }

  onHoverOut = () => {
    this.setState({ timeSlotOpacity: 0.65 });
  }

  render() {
    const { timeSlotsToday, timeSlotOpacity } = this.state;
    const { restaurant } = this.props;
    return (
      <div className="col-12 col-sm-3" style={{ padding: '0 10px' }}>
        <div className="restaurant-card-container" onClick={this.linkToRestaurant} onFocus={this.onHoverIn} onMouseOver={this.onHoverIn} onMouseOut={this.onHoverOut}>
          <div className="restaurant-card-image-container">
            <RestaurantPhotoWithTimeSlots
              photo={restaurant.restaurant_photos[0]}
              timeSlotsToday={timeSlotsToday}
              timeSlotOpacity={timeSlotOpacity}
            />
          </div>
          <div className="restaurant-card-content">
            <div className="restaurant-card-info">
              <div className="restaurant-card-title">{restaurant.name}</div>
              <div className="restaurant-card-cuisine">{restaurant.cuisine.name}</div>
              <div className="restaurant-card-location">{restaurant.location}</div>
              <div className="restaurant-card-stats">
                <div className="restaurant-card-rating">
                  <StarsWithGradient starClass="restaurant-basic-info-stars" avgRating={restaurant.avg_rating} />
                  <div className="restaurant-card-rating-label">{Math.round(restaurant.avg_rating * 10) / 10}</div>
                </div>
                <div className="restaurant-card-price-level">
                  <PriceLevel priceLevel={restaurant.price_level} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RestaurantCard;

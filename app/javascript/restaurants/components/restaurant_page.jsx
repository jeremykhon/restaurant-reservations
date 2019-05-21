import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import BookingForm from './booking_form';
import BASE_URL from '../utils/base_url';
import RestaurantPhotos from './restaurant_photos';
import ReviewsContainer from './reviews_container';

class RestaurantPage extends Component {
  constructor() {
    super();
    this.state = {
      restaurant: null,
    };
  }

  componentDidMount() {
    this.fetchRestaurant();
  }

  fetchRestaurant = () => {
    const { restaurant } = this.props.match.params;
    axios.get(`${BASE_URL}/restaurants/${restaurant}`)
      .then(response => this.setState({ restaurant: response.data }));
  }


  ifAdmin = () => {
    const { loggedIn, user } = this.props;
    const { restaurant } = this.state;
    if (loggedIn && user) {
      if (user.admin) {
        return (
          <Link className="link" to={`/restaurants/${restaurant.id}/admin`}>
            Admin Page
          </Link>
        );
      }
    }
  }

  render() {
    const { restaurant } = this.state;
    const { loggedIn, user } = this.props;
    if (restaurant === null) {
      return <div />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 restaurant-page-title-container">
            <div className="restaurant-page-title">{restaurant.name}</div>
            {this.ifAdmin()}
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-7 order-2 order-sm-1">
            <RestaurantPhotos photos={restaurant.restaurant_photos} />
            <ReviewsContainer loggedIn={loggedIn} restaurant={restaurant} reviews={restaurant.reviews} />
          </div>
          <BookingForm loggedIn={loggedIn} user={user} restaurant={restaurant} />
        </div>
      </div>
    );
  }
}
export default RestaurantPage;

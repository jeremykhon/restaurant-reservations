import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import BookingForm from './booking_form';
import BASE_URL from '../utils/base_url';

class RestaurantPage extends Component {
  constructor() {
    super();
    this.state = {
      restaurant: null,
    };
  }

  componentDidMount() {
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
    if (restaurant === null) {
      return <div />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 restaurant-page-title">
            <div>{restaurant.name}</div>
            {this.ifAdmin()}
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-7">restaurant info</div>
          <BookingForm restaurant={restaurant} />
        </div>
      </div>
    );
  }
}
export default RestaurantPage;

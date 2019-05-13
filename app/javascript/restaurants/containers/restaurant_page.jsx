import React, { Component } from 'react';
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
    const { restaurant } = this.props.match.params
    fetch(`${BASE_URL}/restaurants/${restaurant}`)
      .then(response => response.json())
      .then(data => this.setState({ restaurant: data }));
  }

  render() {
    const { restaurant } = this.state;
    if (restaurant === null) {
      return <div />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">{restaurant.name}</div>
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

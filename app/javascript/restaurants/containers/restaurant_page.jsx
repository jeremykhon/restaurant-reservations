import React, { Component } from 'react';
import BookingForm from './booking_form';

const BASE_URL = '/api/v1';

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
    let result;
    if (restaurant === null) {
      result = <div />;
    } else {
      result = (
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-7">{restaurant.name}</div>
            <BookingForm restaurant={restaurant} />
          </div>
        </div>
      );
    }
    return (
      <div>
        {result}
      </div>
    );
  }
}
export default RestaurantPage;

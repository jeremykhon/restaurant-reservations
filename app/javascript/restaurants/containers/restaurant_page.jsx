import React, { Component } from 'react';

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
      result = <div>{restaurant.name}</div>;
    }
    return (
      <div>
        {result}
      </div>
    );
  }
}
export default RestaurantPage;

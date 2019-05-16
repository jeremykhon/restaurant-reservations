import React, { Component } from 'react';
import BASE_URL from '../utils/base_url';

class RestaurantAdminPage extends Component {
  constructor() {
    super();
    this.state = {
      restaurant: null,
    };
  }

  componentDidMount() {
    const { restaurant } = this.props.match.params;
    fetch(`${BASE_URL}/restaurants/${restaurant}`)
      .then(response => response.json())
      .then(data => this.setState({ restaurant: data }));
  }

  render() {
    const { restaurant } = this.state;
    const { user } = this.props
    if (restaurant === null || !user.admin) {
      return <div />;
    }
    return (
      <div className="container">
        {this.state.restaurant.name}
      </div>
    );
  }
}
export default RestaurantAdminPage;

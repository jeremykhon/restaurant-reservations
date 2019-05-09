import React, { Component } from 'react';

const BASE_URL = '/api/v1';

class Restaurant extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  componentDidMount() {
    const { restaurant } = this.props;
    fetch(`${BASE_URL}/restaurants/${restaurant.id}`)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        {this.props.restaurant.name}
      </div>
    );
  }
}
export default Restaurant;

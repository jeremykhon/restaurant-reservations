import React, { Component } from 'react';
import TimeSlot from './time_slot';

const BASE_URL = '/api/v1';

class Restaurant extends Component {
  constructor() {
    super();
    this.state = {
      timeSlotsToday: [],
    };
  }

  componentDidMount() {
    fetch(`${BASE_URL}/restaurants`)
      .then(response => response.json())
      .then(data => this.setState({ restaurants: data }));
  }

  render() {
    const { timeSlotsToday } = this.state;
    return (
      <div className="restaurant-container">
        <h1>{this.props.restaurant.name}</h1>
        {timeSlotsToday.map(timeSlot => <TimeSlot key={timeSlot.id} timeSlot={timeSlot} />)}
      </div>
    );
  }
}
export default Restaurant;

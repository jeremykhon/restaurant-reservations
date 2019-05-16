import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import TimeSlot from './time_slot';
import BASE_URL from '../utils/base_url';

class Restaurant extends Component {
  constructor() {
    super();
    this.state = {
      timeSlotsToday: [],
      mainPhoto: null,
    };
  }

  componentDidMount() {
    const { restaurant } = this.props;
    const start = new Date().setHours(0, 0, 0, 0);
    const end = new Date().setHours(23, 59, 59, 999);
    axios.get(`${BASE_URL}/restaurants/${restaurant.id}/time_slots?start=${start}&end=${end}`)
      .then(response => this.setState({ timeSlotsToday: response.data }));
    axios.get(`${BASE_URL}/restaurants/${restaurant.id}/restaurant_photos?first=1`)
      .then(response => this.setState({ mainPhoto: response.data[0] }));
  }

  renderPhoto = () => {
    const { mainPhoto } = this.state;
    if (mainPhoto) {
      return (
        <img src={mainPhoto.photo.url} alt={mainPhoto.alt_name} />
      );
    }
  }

  render() {
    const { timeSlotsToday } = this.state;
    const { restaurant } = this.props;
    return (
      <div className="col-12 col-sm-3 restaurant-container">
        {this.renderPhoto()}
        <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
        <div className="time-slots-container">
          {timeSlotsToday.map(timeSlot => <TimeSlot key={timeSlot.id} timeSlot={timeSlot} />)}
        </div>
      </div>
    );
  }
}
export default Restaurant;

import React, { Component } from 'react';
import axios from 'axios';
import BASE_URL from '../utils/base_url';

class ReservationsPage extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    };
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/reservations`)
      .then(response => this.setState({ reservations: response.data }));
  }

  render() {
    const { reservations } = this.state;
    return (
      <div className="container">
        reservations
      </div>
    );
  }
}
export default ReservationsPage;

import React, { Component } from 'react';
import axios from 'axios';
import BASE_URL from '../utils/base_url';
import ReservationCard from './reservation_card';

class ReservationsPage extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    };
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/bookings`, {
      headers: {
        'jwt': localStorage.getItem('jwt')
      },
    })
      .then(response => this.setState({ reservations: response.data }));
  }

  render() {
    const { reservations } = this.state;
    return (
      <div className="container">
        <div className="page-title">Reservations</div>
        <div className="row">
          <div className="col-12 col-sm-3 reservations-menu">todo</div>
          <div className="col-12 col-sm-9 reservations-container">
            {reservations.map((reservation) => {
              return (
                <ReservationCard key={reservation.id} reservation={reservation} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default ReservationsPage;

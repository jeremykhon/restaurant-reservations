import React, { Component } from 'react';
import axios from 'axios';
import BASE_URL from '../utils/base_url';
import ReservationCard from './reservation_card';

class ReservationsPage extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      selected: 'upcoming',
    };
  }

  componentDidMount() {
    this.fetchReservations('upcoming');
  }

  fetchReservations = (only) => {
    axios.get(`${BASE_URL}/bookings?only=${only}`, {
      headers: {
        jwt: localStorage.getItem('jwt'),
      },
    })
      .then(response => this.setState({ reservations: response.data, selected: only }));
  }

  reservationSidebar = () => {
    return (
      <div className="reservation-sidebar">
        <div className="reservation-sidebar-item" role="button" onClick={() => {this.fetchReservations('upcoming')}}>Upcoming</div>
        <div className="reservation-sidebar-item" role="button" onClick={() => {this.fetchReservations('historical')}}>Historical</div>
        <div className="reservation-sidebar-item" role="button" onClick={() => {this.fetchReservations('all reservations')}}>All</div>
      </div>
    );
  }

  render() {
    const { reservations, selected } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-3 ">
            <div className="page-title">My Reservations</div>
            {this.reservationSidebar()}
          </div>
          <div className="col-12 col-sm-9">
            <div className="reservations-content-title">{selected}</div>
            {(reservations.length === 0)
              ? <div className="no-reservations">you have no reserservations</div>
              : reservations.map((reservation) => {
                return (
                  <ReservationCard
                    fetchReservations={this.fetchReservations}
                    key={reservation.id}
                    reservation={reservation}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
export default ReservationsPage;

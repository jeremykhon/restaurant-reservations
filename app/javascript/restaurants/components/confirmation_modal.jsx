/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import hhmmTime from '../utils/hhmm_time';
import formatDate from '../utils/yymmdd_date';
import BASE_URL from '../utils/base_url';
import axios from 'axios';

class ConfirmationModal extends Component {
  constructor() {
    super();
    this.state = {
      confirmed: false,
      booking: null,
    };
  }

  createBooking = () => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
    const body = this.props.bookingForm;

    axios({
      method: 'POST',
      url: `${BASE_URL}/bookings`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
        'jwt': localStorage.getItem('jwt'),
      },
      data: body,
    }).then(response => this.setState({ booking: response.data, confirmed: true }))
      .catch(error => console.log(error));
  }

  render() {
    const { bookingForm, closeModal } = this.props
    if (this.state.confirmed) {
      return (
        <div>
          <div>confirmed!</div>
          <Link to="/">Keep Browsing</Link>
        </div>
      );
    }
    return (
      <div>
        <div>{formatDate(bookingForm.date)}</div>
        <div>{bookingForm.tableSize}</div>
        <div>{hhmmTime(bookingForm.selectedTimeSlot.time)}</div>
        <div>{bookingForm.selectedTimeSlot.discount}</div>
        <div>{bookingForm.name}</div>
        <div>{bookingForm.email}</div>
        <div>{bookingForm.number}</div>
        <button type="button" onClick={this.createBooking}>Confirm</button>
        <button type="button" onClick={closeModal}>Cancel</button>
      </div>
    );
  }
}
export default ConfirmationModal;

/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import hhmmTime from '../utils/hhmm_time';

const BASE_URL = '/api/v1';

class ConfirmationModal extends Component {
  createBooking = () => {

  }
  
  render() {
    const { bookingForm, closeModal } = this.props
    return (
      <div>
        <div>{bookingForm.date}</div>
        <div>{bookingForm.tableSize}</div>
        <div>{hhmmTime(bookingForm.selectedTimeSlot.time)}</div>
        <div>{bookingForm.selectedTimeSlot.discount}</div>
        <div>{bookingForm.name}</div>
        <div>{bookingForm.email}</div>
        <div>{bookingForm.number}</div>
        <button type="button">Confirm</button>
        <button type="button" onClick={closeModal}>Cancel</button>
      </div>
    );
  }
}
export default ConfirmationModal;

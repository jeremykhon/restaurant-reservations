/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import hhmmTime from '../utils/hhmm_time';

const BASE_URL = '/api/v1';

class ConfirmationModal extends Component {
  render() {
    const { bookingForm } = this.props
    return (
      <div>
        <div>{bookingForm.date}</div>
        <div>{bookingForm.tableSize}</div>
        <div>{hhmmTime(bookingForm.selectedTimeSlot.time)}</div>
        <div>{bookingForm.selectedTimeSlot.discount}</div>
        <div>{bookingForm.email}</div>
        <div>{bookingForm.number}</div>
      </div>
    );
  }
}
export default ConfirmationModal;

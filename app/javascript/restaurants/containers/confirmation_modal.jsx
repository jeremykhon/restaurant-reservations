/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

const BASE_URL = '/api/v1';

class ConfirmationModal extends Component {
  render() {
    const { bookingForm } = this.props
    return (
      <div>
        <div>{bookingForm.date}</div>
        <div>{bookingForm.tableSize}</div>
        <div>{bookingForm.selectedTimeSlot}</div>
        <div>{bookingForm.name}</div>
        <div>{bookingForm.name}</div>
        <div>{bookingForm.name}</div>
      </div>
    );
  }
}
export default ConfirmationModal;

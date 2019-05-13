/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from '../utils/base_url';

class ConfirmationModal extends Component {
  // createBooking = () => {
  //   const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  //   const body = this.props.bookingForm;
  //   fetch(`${BASE_URL}/bookings`, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       'X-CSRF-Token': csrfToken,
  //     },
  //     body: JSON.stringify(body),
  //   }).then(response => response.json())
  //     .then(data => this.setState({booking: data, confirmed: true}));;
  // }

  render() {
    const { loggingIn } = this.props;
    if (loggingIn) {
      return (
        <div>
          loggin in
        </div>
      );
    }
    return (
      <div>
        signing up
      </div>
    );
  }
}
export default ConfirmationModal;

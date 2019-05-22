/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import hhmmTime from '../utils/hhmm_time';
import formatDate from '../utils/yymmdd_date';
import BASE_URL from '../utils/base_url';
import longDate from '../utils/long_date';

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
    const { bookingForm: { tableSize, selectedTimeSlot, name, email, number, discount } } = this.props;
    const body = {
      tableSize, selectedTimeSlot, name, email, number, discount,
    };

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
    const {
      closeModal, bookingForm: {
        selectedTimeSlot, tableSize, name, email, number
      },
    } = this.props;
    if (this.state.confirmed) {
      return (
        <div>
          <div>confirmed!</div>
          <Link to="/">Keep Browsing</Link>
        </div>
      );
    }
    return (
      <div className="confirmation-modal">
        <div className="form-title">Please confirm your reservation</div>
        <div className="modal-content">
          <div className="confirmation_modal_field">
            <i className="far fa-calendar-alt icon" />
            <div>{longDate(selectedTimeSlot.time)}</div>
          </div>
          <div className="confirmation_modal_field">
            <i className="fas fa-user-friends icon" />
            <div>{`${tableSize} people`}</div>
          </div>
          <div className="confirmation_modal_field">
            <i className="far fa-clock icon" />
            <div>{hhmmTime(selectedTimeSlot.time)}</div>
          </div>
          <div className="confirmation_modal_field">
            <i className="fas fa-tag icon" />
            <div>{`${selectedTimeSlot.discount}% off`}</div>
          </div>
          <div className="confirmation_modal_field">
            <i className="fas fa-user icon" />
            <div>{name}</div>
          </div>
          <div className="confirmation_modal_field">
            <i className="fas fa-envelope icon" />
            <div>{email}</div>
          </div>
          <div className="confirmation_modal_field">
            <i className="fas fa-phone icon" />
            <div>{number}</div>
          </div>
        </div>
        <button className="form-submit" type="button" onClick={this.createBooking}>Confirm</button>
        <button className="form-cancel" type="button" onClick={closeModal}>Cancel</button>
      </div>
    );
  }
}
export default ConfirmationModal;

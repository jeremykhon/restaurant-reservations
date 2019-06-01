/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import monkeyThumbsUp from 'images/monkey_thumbs_up.png';
import { createReservation } from '../actions/reservation';
import history from '../utils/history';
import hhmmTime from '../utils/hhmm_time';
import longDate from '../utils/long_date';

class ConfirmationModal extends Component {
  constructor() {
    super();
    this.state = {
      confirmed: false,
    };
  }

  createReservation = () => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
    const { bookingForm: { tableSize, selectedTimeSlot, name, email, number, discount } } = this.props;
    const body = {
      tableSize, selectedTimeSlot, name, email, number, discount,
    };
    const jwt = localStorage.getItem('jwt');

    createReservation(body, jwt)
      .then(() => this.setState({ confirmed: true }))
      .catch(error => console.log(error));
  }

  redirectToReservations = () => {
    history.push('/reservations');
  };

  renderConfirmed = () => {
    const {
      closeModal, bookingForm: { selectedTimeSlot, tableSize, name, email, number },
    } = this.props;
    const { confirmed } = this.state;
    if (confirmed) {
      return (
        <div>
          <div className="reservation-success-container">
            <img className="reservation-success-image" src={monkeyThumbsUp} alt="reservation-success-monkey" />
            <div className="reservation-success">reservation confirmed!</div>
          </div>
          <button className="form-submit" type="button" onClick={this.redirectToReservations}>see reservations</button>
        </div>
      );
    }
    return (
      <div>
        <div className="modal-form-content">
          <div className="confirmation-modal-field">
            <i className="far fa-calendar-alt icon" />
            <div>{longDate(selectedTimeSlot.time)}</div>
          </div>
          <div className="confirmation-modal-field">
            <i className="fas fa-user-friends icon" />
            <div>{`${tableSize} people`}</div>
          </div>
          <div className="confirmation-modal-field">
            <i className="far fa-clock icon" />
            <div>{hhmmTime(selectedTimeSlot.time)}</div>
          </div>
          <div className="confirmation-modal-field">
            <i className="fas fa-tag icon" />
            <div>{`${selectedTimeSlot.discount}% off`}</div>
          </div>
          <div className="confirmation-modal-field">
            <i className="fas fa-user icon" />
            <div>{name}</div>
          </div>
          <div className="confirmation-modal-field">
            <i className="fas fa-envelope icon" />
            <div>{email}</div>
          </div>
          <div className="confirmation-modal-field">
            <i className="fas fa-phone icon" />
            <div>{number}</div>
          </div>
        </div>
        <button className="form-submit" type="button" onClick={this.createReservation}>Confirm</button>
        <button className="form-cancel" type="button" onClick={closeModal}>Cancel</button>
      </div>
    );
  }

  render() {
    return (
      <div className="confirmation-modal">
        <div className="form-title">confirm your reservation</div>
        {this.renderConfirmed()}
      </div>
    );
  }
}
export default ConfirmationModal;

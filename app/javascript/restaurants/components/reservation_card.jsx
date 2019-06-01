import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { cancelReservation } from '../actions/reservation';
import BASE_URL from '../utils/base_url';
import hhmmTime from '../utils/hhmm_time';
import longDate from '../utils/long_date';
import RestaurantPhoto from './restaurant_photo';
import history from '../utils/history';
import modalStyles from '../utils/modal_styles';
import ConfirmCancelReservationModal from './confirm_cancel_reservation_modal';

Modal.setAppElement('#root');
const isMobile = window.innerWidth < 576;

class ReservationCard extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  redirectToRestaurant = (restaurantId) => {
    history.push(`/restaurants/${restaurantId}`);
  };

  cancelReservation = () => {
    const { fetchReservations, reservation: { id } } = this.props;
    const jwt = localStorage.getItem('jwt');
    cancelReservation(id, jwt)
      .then(() => {
        fetchReservations('upcoming');
        this.closeModal();
      })
      .catch(error => console.log(error));
  };

  cancelReservationButton = (reservation, fetchReservations) => {
    if (new Date(reservation.time) > new Date()) {
      return (
        <div className="cancel-reservation-button" onClick={this.openModal}>
          <i style={{ marginRight: '5px' }} className="far fa-times-circle" />
          { isMobile
            ? null
            : <div className="cancel-reservation-button-label">cancel reservation</div>
          }
        </div>
      );
    }
    return null;
  };

  render() {
    const { reservation, fetchReservations } = this.props; 
    return (
      <div className="reservation-card">
        <div className="reservation-card-left">
          <div className="reservation-card-photo-container">
            <RestaurantPhoto optionalClass="reservation-photo" photo={reservation.restaurant.restaurant_photos[0]} />
          </div>
          <button type="button" className="view-restaurant-button no-select" onClick={() => { this.redirectToRestaurant(reservation.restaurant_id); }}>view restaurant</button>
        </div>
        <div className="reservation-card-right">
          <div className="reservation-card-right-top">
            <div className="reservation-card--restaurant-name">
              {reservation.restaurant.name}
            </div>
            {this.cancelReservationButton(reservation)}
          </div>
          <div className="reservation-card-content">
            <div className="reservation-card-content-left">
              <div className="reservation-card--detail">
                <i className="far fa-calendar-alt icon" />
                {longDate(reservation.time)}
              </div>
              <div className="reservation-card--detail">
                <i className="far fa-clock icon" />
                {hhmmTime(reservation.time)}
              </div>
            </div>
            <div className="reservation-card-content-right">
              <div className="reservation-card--detail">
                <i className="fas fa-user-friends icon" />
                {`${reservation.table_size} people`}
              </div>
              <div className="reservation-card--detail">
                <i className="fas fa-tag icon" />
                {`${reservation.discount}% off`}
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="cancel reservation modal"
          style={modalStyles}
        >
          <ConfirmCancelReservationModal
            cancelReservation={this.cancelReservation}
            closeModal={this.closeModal}
          />
        </Modal>
      </div>
    );
  };
}
export default ReservationCard;

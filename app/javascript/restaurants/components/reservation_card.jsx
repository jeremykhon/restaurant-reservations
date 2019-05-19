import React from 'react';
import axios from 'axios';
import BASE_URL from '../utils/base_url';
import hhmmTime from '../utils/hhmm_time';
import longDate from '../utils/long_date';
import RestaurantPhoto from './restaurant_photo';
import history from '../utils/history';

const isMobile = window.innerWidth < 576;

const redirectToRestaurant = (restaurantId) => {
  history.push(`/restaurants/${restaurantId}`);
};

const cancelReservation = (id, fetchReservations) => {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  axios({
    method: 'DELETE',
    url: `${BASE_URL}/bookings/${id}`,
    headers: {
      'X-CSRF-Token': csrfToken,
      jwt: localStorage.getItem('jwt'),
    },
  })
    .then(() => fetchReservations('upcoming'))
    .catch(error => console.log(error));
};

const cancelReservationButton = (reservation, fetchReservations) => {
  if (new Date(reservation.time) > new Date()) {
    return (
      <div className="cancel-reservation-button" onClick={() => { cancelReservation(reservation.id, fetchReservations); }}>
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

const ReservationCard = ({ reservation, fetchReservations }) => {
  return (
    <div className="reservation-card">
      <div className="reservation-card-left">
        <div className="reservation-card-photo-container">
          <RestaurantPhoto optionalClass="reservation-photo" photo={reservation.restaurant.restaurant_photos[0]} />
        </div>
        <button type="button" className="view-restaurant-button no-select" onClick={() => { redirectToRestaurant(reservation.restaurant_id); }}>view restaurant</button>
      </div>
      <div className="reservation-card-right">
        <div className="reservation-card-right-top">
          <div className="reservation-card--restaurant-name">
            {reservation.restaurant.name}
          </div>
          {cancelReservationButton(reservation, fetchReservations)}
          {/* <div className="cancel-reservation-button" onClick={() => { cancelReservation(reservation.id, fetchReservations); }}>
            <i style={{ marginRight: '5px' }} className="far fa-times-circle" />
            {cancelReservationLabel()}
          </div> */}
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
    </div>
  );
};

export default ReservationCard;

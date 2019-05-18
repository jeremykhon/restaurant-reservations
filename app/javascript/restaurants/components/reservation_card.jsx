import React from 'react';
import axios from 'axios';
import BASE_URL from '../utils/base_url';
import hhmmTime from '../utils/hhmm_time';
import longDate from '../utils/long_date';
import RestaurantPhoto from './restaurant_photo';

const ReservationCard = ({ reservation }) => {
  return (
    <div className="reservation-card">
      <div className="reservation-card-left">
        <div className="reservation-card-photo-container">
          <RestaurantPhoto optionalClass="reservation-photo" photo={reservation.restaurant.restaurant_photos[0]} />
        </div>
        <button type="button" className="view-restaurant-button no-select">view restaurant</button>
      </div>
      <div className="reservation-card-right">
        <div className="reservation-card--restaurant-name">
          {reservation.restaurant.name}
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

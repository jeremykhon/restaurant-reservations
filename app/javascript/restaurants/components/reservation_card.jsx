import React from 'react';
import axios from 'axios';
import BASE_URL from '../utils/base_url';
import hhmmTime from '../utils/hhmm_time';
import longDate from '../utils/long_date';
import RestaurantPhoto from './restaurant_photo';

const ReservationCard = ({ reservation }) => {
  return (
    <div className="reservation-card">
      <div className="reservation-restaurant-photo-container">
        <RestaurantPhoto optionalClass="reservation-photo" photo={reservation.restaurant.restaurant_photos[0]} />
      </div>
      <div>
        {reservation.restaurant.name}
      </div>
      <div>
        {longDate(reservation.time)}
      </div>
      <div>
        {hhmmTime(reservation.time)}
      </div>
      <div>
        {`${reservation.table_size} people`}
      </div>
      <div>
        {reservation.discount}
      </div>
    </div>
  );
};

export default ReservationCard;

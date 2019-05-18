import React from 'react';
import axios from 'axios';
import BASE_URL from '../utils/base_url';
import hhmmTime from '../utils/hhmm_time';
import longDate from '../utils/long_date';

const ReservationCard = ({ reservation }) => {
  return (
    <div className="reservation-card">
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

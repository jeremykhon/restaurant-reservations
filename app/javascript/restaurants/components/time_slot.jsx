import React from 'react';
import hhmmTime from '../utils/hhmm_time';

const TimeSlot = ({ timeSlot, linkToRestaurantWithTimeSlot }) => {
  const time = hhmmTime(timeSlot.time);
  return (
    <div className="time-slot" onClick={(event) => {linkToRestaurantWithTimeSlot(event, timeSlot)}}>
      <div className="time-slot-time">
        {time}
      </div>
      <div className="time-slot-discount">
        {`-${timeSlot.discount}%`}
      </div>
    </div>
  );
};

export default TimeSlot;

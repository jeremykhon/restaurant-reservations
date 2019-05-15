import React from 'react';
import hhmmTime from '../utils/hhmm_time';

const TimeSlot = ({ timeSlot }) => {
  const time = hhmmTime(timeSlot.time);
  return (
    <div className="time-slot">
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

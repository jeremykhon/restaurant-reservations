import React from 'react';
import hhmmTime from '../utils/hhmm_time';

const TimeSlot = ({ timeSlot }) => {
  const time = hhmmTime(timeSlot.time);
  return (
    <div className="timeSlot">
      {time}
    </div>
  );
}

export default TimeSlot;

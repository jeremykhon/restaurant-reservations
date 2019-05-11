import React from 'react';
import hhmmTime from '../utils/hhmm_time';

const TimeSlot = ({ timeSlot }) => {
  const time = hhmmTime(new Date(timeSlot.time));
  return (
    <div className="timeSlot">
      {time}
    </div>
  );
}

export default TimeSlot;

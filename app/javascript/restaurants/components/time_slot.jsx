import React from 'react';

const TimeSlot = ({ timeSlot }) => {
  return (
    <div className="timeSlot">
      {timeSlot.time}
    </div>
  );
}

export default TimeSlot;

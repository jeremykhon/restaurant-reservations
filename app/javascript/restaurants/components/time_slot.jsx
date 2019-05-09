import React from 'react';

const strfTime = (time) => {
  console.log(time);
  const checkTime = (i) => {
    return (i < 10) ? "0" + i : i;
  };
  const hh = checkTime(time.getHours());
  const mm = checkTime(time.getMinutes());
  return `${hh}:${mm}`;
};

const TimeSlot = ({ timeSlot }) => {
  const time = strfTime(new Date(timeSlot.time));
  return (
    <div className="timeSlot">
      {time}
    </div>
  );
}

export default TimeSlot;

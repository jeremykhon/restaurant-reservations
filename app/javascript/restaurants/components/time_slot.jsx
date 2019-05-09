import React from 'react';

const TimeSlot = ({ timeSlots }) => {
  return (
    <div className="restaurant-container">
      <h1>{this.props.restaurant.name}</h1>
      {timeSlotsToday.map(timeSlot => <TimeSlot timeSlot={timeSlot} />)}
    </div>
  );
}

export default TimeSlot;

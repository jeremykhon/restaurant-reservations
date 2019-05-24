import React from 'react';
import TimeSlot from './time_slot';

const RestaurantPhotoWithTimeSlots = ({ photo, timeSlotsToday, timeSlotOpacity, linkToRestaurantWithTimeSlot }) => {
  if (photo) {
    return (
      <div className="restaurant-photo-with-time-slots" style={{ backgroundImage: `url(${photo.photo.url})` }}>
        <div className="time-slots-container" style={{ opacity: timeSlotOpacity }}>
          {timeSlotsToday.map(timeSlot => <TimeSlot key={timeSlot.id} timeSlot={timeSlot} linkToRestaurantWithTimeSlot={linkToRestaurantWithTimeSlot} />)}
        </div>
      </div>
    );
  }
  return (
    <div className="restaurant-no-photo" />
  );
};

export default RestaurantPhotoWithTimeSlots;

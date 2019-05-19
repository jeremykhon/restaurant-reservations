import React from 'react';

const RestaurantPhoto = ({ photo, optionalClass }) => {
  if (photo) {
    return (
      <div className={`restaurant-photo ${optionalClass}`} style={{ backgroundImage: `url(${photo.photo.url})` }} />
    );
  }
  return (
    <div className="restaurant-no-photo" />
  );
};

export default RestaurantPhoto;

import React from 'react';

const RestaurantPhoto = ({ photo }) => {
  if (photo) {
    return (
      <div className="restaurant-photo" style={{ backgroundImage: `url(${photo.photo.url})` }} />
    );
  }
  return (
    <div className="restaurant-no-photo" />
  );
};

export default RestaurantPhoto;

import React from 'react';

const RestaurantAbout = ({ restaurantAbout }) => {
  return (
    <div className="restaurant-section-container">
      <div className="restaurant-section-title">about</div>
      <div className="restaurant-section-inside-container">
        {restaurantAbout}
      </div>
    </div>
  );
};

export default RestaurantAbout;

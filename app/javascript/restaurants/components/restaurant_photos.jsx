import React from 'react';
import RestaurantPhoto from './restaurant_photo';

const RestaurantPhotos = ({ photos }) => {
  return (
    <div className="restaurant-photos-container">
      <div className="restaurant-photos-left">
        <div className="photo-1">
          <RestaurantPhoto photo={photos[0]} />
        </div>
      </div>
      <div className="restaurant-photos-right">
        <div className="photo-2">
          <RestaurantPhoto photo={photos[1]} />
        </div>
        <div className="photo-3">
          <RestaurantPhoto photo={photos[2]} />
        </div>
        <div className="photo-4">
          <RestaurantPhoto photo={photos[3]} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantPhotos;

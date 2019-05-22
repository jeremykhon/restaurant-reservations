import React from 'react';
import RestaurantList from './restaurant_list';
import BannerImage from './banner_image';

const MainPage = () => {
  return (
    <div className="main-page-container">
      <BannerImage />
      <div className="container big-container">
        <div className="section-title">
          all restaurants
        </div>
        <RestaurantList />
      </div>
    </div>
  );
};

export default MainPage;

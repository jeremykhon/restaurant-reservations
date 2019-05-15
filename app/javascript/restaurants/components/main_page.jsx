import React from 'react';
import RestaurantList from './restaurant_list';
import BannerImage from './banner_image';

const MainPage = () => {
  return (
    <div className="main-page-container">
      <BannerImage />
      <RestaurantList />
    </div>
  );
};

export default MainPage;

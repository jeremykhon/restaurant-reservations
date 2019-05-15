import React from 'react';
import RestaurantList from './restaurant_list';
import BannerImage from './banner_image';

const MainPage = () => {
  return (
    <div className="container">
      <BannerImage />
      <RestaurantList />
    </div>
  );
};

export default MainPage;

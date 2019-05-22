import React from 'react';
import activePrice from 'images/active_price.svg';
import inactivePrice from 'images/inactive_price.svg';

const PriceIcon = (priceLevel, i) => {
  return (
    <img className="price-level" src={priceLevel > i ? activePrice : inactivePrice} alt="price-level" />
  );
};

const PriceLevel = ({ priceLevel }) => {
  return (
    <div className="price-level-container">
      {[...Array(5).keys()].map(i => PriceIcon(priceLevel, i))}
    </div>
  );
};

export default PriceLevel;

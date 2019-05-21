import React from 'react';
import starSvg from '../utils/star_svg';

const starWithGradient = (averageRating, i) => {
  if (averageRating - 1 > i) {
    return (
      <svg viewBox="0 0 50 50" className="star-svg">
        <path className="star star-fill" d={starSvg} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 50 50" className="star-svg">
      <defs>
        <linearGradient id={`grad${i}`} x1="0%" x2="100%">
          <stop offset="60%" stopColor="#ed9102" stopOpacity="100%" />
          <stop offset="0%" stopColor="#CAD3E2" stopOpacity="100%" />
        </linearGradient>
      </defs>
      <path d={starSvg} fill={`url(#grad${i})`} />
    </svg>
  );
};

const StarsWithGradient = ({ avgRating }) => {
  return (
    <div className="star-container">
      {[...Array(5).keys()].map(i => starWithGradient(avgRating, i))}
    </div>
  );
};

export default StarsWithGradient;

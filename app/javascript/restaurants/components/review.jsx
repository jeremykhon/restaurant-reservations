import React from 'react';
import MmmDdYyyy from '../utils/mmm_dd_yyyy';
import starSvg from '../utils/star_svg';

const starFill = (rating, starPosition) => {
  if (rating >= starPosition) {
    return 'star-fill';
  }
  return null;
};

const Review = ({ review }) => {
  return (
    <div className="review-container">
      <div className="review-top">
        <div className="review-user-name">{review.user.name}</div>
        <div className="review-date">{MmmDdYyyy(review.created_at)}</div>
      </div>
      <div className="star-container">
        <svg viewBox="0 0 50 50" className="star-svg">
          <path className={`star ${starFill(review.rating, 1)}`} d={starSvg} />
        </svg>
        <svg viewBox="0 0 50 50" className="star-svg">
          <path className={`star ${starFill(review.rating, 2)}`} d={starSvg} />
        </svg>
        <svg viewBox="0 0 50 50" className="star-svg">
          <path className={`star ${starFill(review.rating, 3)}`} d={starSvg} />
        </svg>
        <svg viewBox="0 0 50 50" className="star-svg">
          <path className={`star ${starFill(review.rating, 4)}`} d={starSvg} />
        </svg>
        <svg viewBox="0 0 50 50" className="star-svg">
          <path className={`star ${starFill(review.rating, 5)}`} d={starSvg} />
        </svg>
      </div>
      <div className="review-content">{review.content}</div>
    </div>
  );
};

export default Review;

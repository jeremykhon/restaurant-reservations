import React from 'react';
import MmmDdYyyy from '../utils/mmm_dd_yyyy';

const Review = ({ review }) => {
  return (
    <div className="review-container">
      <div className="review-top">
        <div className="review-user-name">{review.user.name}</div>
        <div className="review-date">{MmmDdYyyy(review.created_at)}</div>
      </div>
      <div className="review-rating">{review.rating}</div>
      <div className="review-content">{review.content}</div>
    </div>
  );
};

export default Review;

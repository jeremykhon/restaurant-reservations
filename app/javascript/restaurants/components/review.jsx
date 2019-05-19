import React from 'react';

const Review = ({ review }) => {
  return (
    <div>
      <div>{review.user.name}</div>
      <div>{review.content}</div>
      <div>{review.rating}</div>
      <div>{review.created_at}</div>
    </div>
  );
};

export default Review;

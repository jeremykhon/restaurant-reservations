import React, { Component } from 'react';
import axios from "axios";
import BASE_URL from '../utils/base_url';

class ReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      rating: null,
      content: null,
    };
  }

  render() {
    const { reviews } = this.state
    return (
      <div className="reviews-container">
        {reviews.map(review => <Review review={review} />)}
        <ReviewForm />
      </div>
    );
  }
}

export default ReviewsContainer;

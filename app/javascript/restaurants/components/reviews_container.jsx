import React, { Component } from 'react';
import Review from './review';
import axios from "axios";
import BASE_URL from '../utils/base_url';

class ReviewsContainer extends Component {
  constructor(props) {
    super(props);
    const { reviews } = this.props;
    this.state = { reviews };
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
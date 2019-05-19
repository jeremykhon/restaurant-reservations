import React, { Component } from 'react';
import Review from './review';
import ReviewForm from './review_form';
import axios from "axios";
import BASE_URL from '../utils/base_url';

class ReviewsContainer extends Component {
  constructor(props) {
    super(props);
    const { reviews } = this.props;
    this.state = { reviews };
  }

  appendReview = (review) => {
    this.setState((state) => {
      return { reviews: [...state.reviews, review] };
    });
  }

  render() {
    const { reviews } = this.state;
    const { restaurantId } = this.props;
    return (
      <div className="reviews-container">
        {reviews.map(review => <Review key={review.id} review={review} />)}
        <ReviewForm appendReview={this.appendReview} restaurantId={restaurantId} />
      </div>
    );
  }
}

export default ReviewsContainer;

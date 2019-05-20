import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import Review from './review';
import ReviewForm from './review_form';
import modalStyles from '../utils/modal_styles';
import BASE_URL from '../utils/base_url';

class ReviewsContainer extends Component {
  constructor() {
    super();
    this.state = { 
      reviews: [],
      modalIsOpen: false,
    };
  }

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    const { restaurantId } = this.props;
    axios.get(`${BASE_URL}/restaurants/${restaurantId}/reviews`)
      .then(response => this.setState({ reviews: response.data }));
  }

  appendReview = (review) => {
    this.setState((state) => {
      return { reviews: [review, ...state.reviews] };
    });
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { reviews } = this.state;
    const { restaurantId } = this.props;
    return (
      <div className="reviews-container">
        {reviews.map(review => <Review key={review.id} review={review} />)}
        <button onClick={this.openModal}>Leave a review</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Review Modal"
          style={modalStyles}
        >
          <ReviewForm
            closeModal={this.closeModal}
            appendReview={this.appendReview}
            restaurantId={restaurantId}
          />
        </Modal>
      </div>
    );
  }
}

export default ReviewsContainer;

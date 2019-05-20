import React, { Component } from 'react';
import Modal from 'react-modal';
import Review from './review';
import ReviewForm from './review_form';
import modalStyles from '../utils/modal_styles';

class ReviewsContainer extends Component {
  constructor(props) {
    super(props);
    const { reviews } = this.props;
    this.state = { 
      reviews,
      modalIsOpen: false,
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
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

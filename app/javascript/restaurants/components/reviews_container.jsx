import React, { Component } from 'react';
import Modal from 'react-modal';
import Review from './review';
import ReviewForm from './review_form';
import modalStyles from '../utils/modal_styles';
import StarsWithGradient from './stars_with_gradient';

class ReviewsContainer extends Component {
  constructor(props) {
    super(props);
    const { reviews } = this.props;
    this.state = { 
      reviews,
      modalIsOpen: false,
    };
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
    const { restaurant, loggedIn, openLogInModal } = this.props;
    return (
      <div className="restaurant-section-container">
        <div className="restaurant-section-title">reviews</div>
        <div className="restaurant-section-inside-container">
          <div className="reviews-top">
            <div className="reviews-summary">
              <div className="big-average-rating">{Math.round(restaurant.avg_rating * 10) / 10}</div>
              <StarsWithGradient avgRating={restaurant.avg_rating} />
              <div className="number-of-reviews">{`${reviews.length} reviews`}</div>
            </div>
            <div>
              {loggedIn
                ? <button className="leave-review-button" type="button" onClick={this.openModal}>Leave a review</button>
                : <div className="log-in-to-review-message" onClick={openLogInModal}>log in to leave a review</div>
              }
            </div>
          </div>
          {reviews.map(review => <Review key={review.id} review={review} />)}
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Review Modal"
            style={modalStyles}
          >
            <ReviewForm
              closeModal={this.closeModal}
              appendReview={this.appendReview}
              restaurantId={restaurant.id}
            />
          </Modal>
        </div>
      </div>
    );
  }
}

export default ReviewsContainer;

import React, { Component } from 'react';
import { postReview } from '../actions/review';
import starSvg from '../utils/star_svg';

class ReviewForm extends Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      content: '',
      ratingValid: true,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) this.createReview();
  }

  validateForm = () => {
    const { rating } = this.state;
    const ratingValid = rating > 0;
    this.setState({ ratingValid });
    return ratingValid;
  }

  createReview = () => {
    const { rating, content } = this.state;
    const { restaurantId, appendReview, closeModal } = this.props;
    const body = { rating, content };
    const jwt = localStorage.getItem('jwt');
    postReview(body, restaurantId, jwt)
      .then((response) => {
        appendReview(response.data);
        closeModal();
      })
      .catch(error => console.log(error));
  }

  updateRating = (rating) => {
    this.setState({ rating }, this.validateForm);
  }

  starFill = (starPosition) => {
    const { rating } = this.state;
    if (rating >= starPosition) {
      return 'star-fill';
    }
  };

  render() {
    const { rating, content, ratingValid } = this.state;
    const { closeModal } = this.props;
    return (
      <div className="review-form-container">
        <div className="form-title">Leave a review</div>
        <form onSubmit={this.handleSubmit}>
          <div className={ratingValid ? 'form-star-container' : 'form-star-container invalid'}>
            <svg viewBox="0 0 50 50" className="star-svg-clickable" onClick={() => { this.updateRating(1); }}>
              <path className={`star ${this.starFill(1)}`} d={starSvg} />
            </svg>
            <svg viewBox="0 0 50 50" className="star-svg-clickable" onClick={() => { this.updateRating(2); }}>
              <path className={`star ${this.starFill(2)}`} d={starSvg} />
            </svg>
            <svg viewBox="0 0 50 50" className="star-svg-clickable" onClick={() => { this.updateRating(3); }}>
              <path className={`star ${this.starFill(3)}`} d={starSvg} />
            </svg>
            <svg viewBox="0 0 50 50" className="star-svg-clickable" onClick={() => { this.updateRating(4); }}>
              <path className={`star ${this.starFill(4)}`} d={starSvg} />
            </svg>
            <svg viewBox="0 0 50 50" className="star-svg-clickable" onClick={() => { this.updateRating(5); }}>
              <path className={`star ${this.starFill(5)}`} d={starSvg} />
            </svg>
          </div>
          {ratingValid ? null : <div className="validation-error-message">please give a rating</div>}
          <div className="form-item">
            <textarea className="review-form-comment-box form-text-area no-select" wrap="soft" name="content" value={content} placeholder="please share your experience" onChange={this.handleChange} />
          </div>
          <button className="form-submit no-select" type="submit" value="Submit">Submit</button>
          <button className="form-cancel no-select" type="button" onClick={closeModal}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;

import React, { Component } from 'react';
import axios from 'axios';
import BASE_URL from '../utils/base_url';

const starSvg = "m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"

class ReviewForm extends Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      content: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.createReview();
  }

  createReview = () => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
    const { rating, content } = this.state;
    const { restaurantId, appendReview, closeModal } = this.props;
    const body = { rating, content };

    axios({
      method: 'POST',
      url: `${BASE_URL}/restaurants/${restaurantId}/reviews`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
        'jwt': localStorage.getItem('jwt'),
      },
      data: body,
    }).then((response) => {
      appendReview(response.data);
      closeModal();
    })
      .catch(error => console.log(error));
  }

  updateRating = (rating) => {
    this.setState({ rating });
  }

  starFill = (starPosition) => {
    const { rating } = this.state;
    if (rating >= starPosition) {
      return 'star-fill';
    }
  };

  render() {
    const { rating, content } = this.state;
    const { closeModal } = this.props;
    return (
      <div className="review-form-container">
        <div className="form-title">Leave a review</div>
        <form onSubmit={this.handleSubmit}>
          <div className="star-container-center">
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

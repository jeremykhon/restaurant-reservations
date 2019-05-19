import React, { Component } from 'react';
import axios from "axios";
import BASE_URL from '../utils/base_url';

class ReviewForm extends Component {
  constructor() {
    super();
    this.state = {
      rating: '',
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
    const { restaurantId, appendReview } = this.props;
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
    }).then(response => appendReview(response.data))
      .catch(error => console.log(error));
  }


  render() {
    const { rating, content } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            rating
            <input type="text" name="rating" value={rating} onChange={this.handleChange} />
          </div>
          <div>
            content
            <input type="text" name="content" value={content} onChange={this.handleChange} />
          </div>
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;

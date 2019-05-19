import React, { Component } from 'react';
import axios from "axios";
import BASE_URL from '../utils/base_url';

class ReviewForm extends Component {
  constructor() {
    super();
    this.state = {
      rating: null,
      content: null,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("hello");
  }

  render() {
    const { reviews } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="rating" onChange={this.handleChange} />
          <input type="text" name="content" onChange={this.handleChange} />
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;

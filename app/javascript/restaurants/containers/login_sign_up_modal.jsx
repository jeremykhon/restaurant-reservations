/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from '../utils/base_url';

class LoginSignUpModal extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    };
  }

  // createBooking = () => {
  //   const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  //   const body = this.props.bookingForm;
  //   fetch(`${BASE_URL}/bookings`, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       'X-CSRF-Token': csrfToken,
  //     },
  //     body: JSON.stringify(body),
  //   }).then(response => response.json())
  //     .then(data => this.setState({booking: data, confirmed: true}));;
  // }

  logIn = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" name="email" autoComplete="username" placeholder="email"/>
        </div>
        <div>
          <input type="password" name="password" autoComplete="current-password" placeholder="password"/>
        </div>
        <button className="booking-form-submit" type="submit" value="Submit">Log in</button>
      </form>
    )
  }

  signUp = () => {
    return (
      <form onSubmit={this.handleSubmit}>

      </form>
    )
  }

  render() {
    if (this.props.loggingIn) {
      return (
        this.logIn()
      );
    }
    return (
      this.signUp()
    );
  }
}
export default LoginSignUpModal;

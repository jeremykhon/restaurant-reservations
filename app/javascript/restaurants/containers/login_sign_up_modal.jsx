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

  handleChange = (event) => {
    const target = event.target
    const name = target.name;
    this.setState({[name]: target.value});
  }

  logIn = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-div">
          <input className="form-text-input no-select" type="text" name="email" autoComplete="username" placeholder="email" onChange={this.handleChange}/>
        </div>
        <div className="form-div">
          <input className="form-text-input no-select" type="password" name="password" autoComplete="current-password" placeholder="password" onChange={this.handleChange}/>
        </div>
        <button className="form-submit no-select" type="submit" value="Submit">log in</button>
      </form>
    )
  }

  signUp = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-div">
          <input className="form-text-input no-select" type="text" name="name" placeholder="name" onChange={this.handleChange}/>
        </div>
        <div className="form-div">
          <input className="form-text-input no-select" type="text" name="email" autoComplete="username" placeholder="email" onChange={this.handleChange}/>
        </div>
        <div className="form-div">
          <input className="form-text-input no-select" type="password" name="password" autoComplete="new-password" placeholder="password" onChange={this.handleChange}/>
        </div>
        <div className="form-div">
          <input className="form-text-input no-select" type="password" name="confirmPassword" autoComplete="new-password" placeholder="re-type password" onChange={this.handleChange}/>
        </div>
        <button className="form-submit no-select" type="submit" value="Submit">sign up</button>
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

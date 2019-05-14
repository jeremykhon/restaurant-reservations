/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from '../utils/base_url';

class LogInSignUpModal extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      unauthorized: false,
    };
  }

  logIn = () => {
    event.preventDefault();
    const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
    const { email, password } = this.state
    const body = { email, password };
    console.log(body)
    fetch(`${BASE_URL}/authenticate`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
      body: JSON.stringify(body),
    }).then(response => {
        if (response.ok) {
          response.json().then(data => localStorage.setItem('Authorization', data.auth_token));
        } else {
          this.setState({unauthorized: true});
        }
      }
    )
  }

  // response.json())
      // .then(data => localStorage.setItem('Authorization', data.auth_token));

  handleChange = (event) => {
    const target = event.target
    const name = target.name;
    this.setState({[name]: target.value});
  }

  errorMessage = () => {
    if (this.state.unauthorized) {
      return (
        <div className="log-in-sign-up-error-message">Your email or password was incorrect<br/>please try again</div>
      )
    }
  }

  logInForm = () => {
    return (
      <form onSubmit={this.logIn}>
        <div>
          Log in
        </div>
        <div className="log-in-sign-up-messages-container">
          {this.errorMessage()}
        </div>
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

  signUpForm = () => {
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
        this.logInForm()
      );
    }
    return (
      this.signUpForm()
    );
  }
}
export default LogInSignUpModal;

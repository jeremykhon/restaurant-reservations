/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from '../utils/base_url';

class AuthenticationModal extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      unauthorized: false,
      emailTaken: false,
    };
  }

  logIn = () => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
    const { email, password } = this.state
    const body = { email, password };
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
          this.logInSuccess()
        } else {
          this.setState({unauthorized: true});
        }
      }
    )
  }

  logInSuccess = () => {
    this.props.logIn()
    this.props.closeModal()
  }

  signUp = (event) => {
    event.preventDefault()
    const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
    const { email, name, password } = this.state
    const body = { email, name, password };
    fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
      body: JSON.stringify(body),
    }).then(response => {
        if (response.ok) {
          this.logIn()
        } else {
          console.log(response);
          this.setState({emailTaken: true})
        }
      }
    )
  }

  handleChange = (event) => {
    const target = event.target
    const name = target.name;
    this.setState({[name]: target.value});
  }

  errorMessage = () => {
    if (this.state.unauthorized) {
      return (
        <div className="authentication-error-message">Your email or password was incorrect<br/>please try again</div>
      )
    }
    if (this.state.emailTaken) {
      return (
        <div className="authentication-error-message">That email has already been taken<br/>please log in or try again</div>
      )
    }
  }

  logInForm = () => {
    return (
      <div className="authentication-container">
        <div className="authentication-form-title">
          Log in
        </div>
        <form className="authentication-form" onSubmit={(e) => {e.preventDefault(); this.logIn()}}>
          <div className="authentication-form-items">
            <div className="authentication-form-messages">
              {this.errorMessage()}
            </div>
            <div className="form-item">
              <input className="form-text-input no-select" type="text" name="email" autoComplete="username" placeholder="email" onChange={this.handleChange}/>
            </div>
            <div className="form-item">
              <input className="form-text-input no-select" type="password" name="password" autoComplete="current-password" placeholder="password" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="authentication-form-actions">
            <button className="form-submit no-select" type="submit" value="Submit">log in</button>
          </div>
        </form>
      </div>
    )
  }

  signUpForm = () => {
    return (
      <div className="authentication-container">
        <div className="authentication-form-title">
          Sign up
        </div>
          <form className="authentication-form" onSubmit={this.signUp}>
            <div className="authentication-form-items">
              <div className="authentication-form-messages">
                {this.errorMessage()}
              </div>
              <div className="form-item">
                <input className="form-text-input no-select" type="text" name="name" placeholder="name" onChange={this.handleChange}/>
              </div>
              <div className="form-item">
                <input className="form-text-input no-select" type="text" name="email" autoComplete="username" placeholder="email" onChange={this.handleChange}/>
              </div>
              <div className="form-item">
                <input className="form-text-input no-select" type="password" name="password" autoComplete="new-password" placeholder="password" onChange={this.handleChange}/>
              </div>
              <div className="form-item">
                <input className="form-text-input no-select" type="password" name="confirmPassword" autoComplete="new-password" placeholder="re-type password" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="authentication-form-actions">
              <button className="form-submit no-select" type="submit" value="Submit">sign up</button>
            </div>
        </form>
      </div>
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
export default AuthenticationModal;

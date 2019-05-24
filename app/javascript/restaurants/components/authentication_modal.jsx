/* eslint-disable default-case */
import React, { Component } from 'react';
import axios from 'axios';
import BASE_URL from '../utils/base_url';

class AuthenticationModal extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      unauthorized: false,
      emailTaken: false,
      nameValid: true,
      emailValid: true,
      passwordPresenceValid: true,
      passwordLengthValid: true,
      confirmPasswordValid: true,
    };
  }

  logIn = () => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
    const { email, password } = this.state;
    const body = { email, password };

    axios({
      method: 'POST',
      url: `${BASE_URL}/authenticate`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
      data: body,
    }).then((response) => {
      localStorage.setItem('jwt', response.data.auth_token);
      this.logInSuccess();
    })
      .catch(() => this.setState({ unauthorized: true }));
  }

  logInSuccess = () => {
    // setting parent state to logged in and closing the modal after login success
    const { logIn, closeModal } = this.props;
    logIn();
    closeModal();
  }

  signUp = () => {
    this.validateForm(true);
    const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
    const { email, name, password } = this.state;
    const body = { email, name, password };
    axios({
      method: 'POST',
      url: `${BASE_URL}/users`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
      data: body,
    }).then(() => this.logIn())
      .catch(() => this.setState({ emailTaken: true }));
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: target.value });
  }

  messages = () => {
    if (this.state.unauthorized) {
      return (
        <div className="authentication-error-message">
          Your email or password was incorrect
          <br />
          please try again
        </div>
      );
    }
    if (this.state.emailTaken) {
      return (
        <div className="authentication-error-message">
          That email has already been taken
          <br />
          please log in or try again
        </div>
      );
    }
  }

  validateField = (event) => {
    const name = event.target.name
    let nameValid = this.state.nameValid
    let passwordLengthValid = this.state.passwordLengthValid
    let emailValid = this.state.emailValid
    let confirmPasswordValid = this.state.confirmPasswordValid

    switch (name) {
      case 'name':
        nameValid = (/^[A-z ]{1,20}$/).test(this.state.name)
        this.setState({ nameValid });
        break;
      case 'email':
        emailValid = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(this.state.email)
        this.setState({ emailValid });
        break;
      case 'password':
        passwordLengthValid = this.state.password.length > 5;
        this.setState({ passwordLengthValid });
        break;
      case 'confirmPassword':
        confirmPasswordValid = (this.state.password === this.state.confirmPassword);
        this.setState({ confirmPasswordValid });
        break;
    }
  }


  validateForm = (isSignUp) => {
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let passwordPresenceValid = this.state.passwordPresenceValid;
    let passwordLengthValid = this.state.passwordlengthValid;
    let confirmPasswordValid = this.state.confirmPasswordValid;

    emailValid = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(this.state.email)
    passwordPresenceValid = this.state.password.length > 0;

    if (isSignUp) {
      passwordLengthValid = this.state.password.length > 5;
      nameValid = (/^[A-z ]{1,20}$/).test(this.state.name);
      confirmPasswordValid = (this.state.password === this.state.confirmPassword);
      this.setState({
        nameValid, emailValid, passwordLengthValid, confirmPasswordValid,
      });
      return (nameValid && emailValid && passwordLengthValid && confirmPasswordValid);
    }

    this.setState({
      emailValid, passwordPresenceValid,
    });

    return (emailValid && passwordPresenceValid);
  }

  preLogIn = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      this.logIn();
    }
  }

  preSignUp = (event) => {
    event.preventDefault();
    if (this.validateForm(true)) {
      this.signUp();
    }
  }

  errorMessage = (name) => {
    switch (name) {
      case 'name':
        if (this.state.nameValid === false) {
          return (
            <div className="validation-error-message">please enter your name</div>
          );
        }
        break;
      case 'email':
        if (this.state.emailValid === false) {
          return (
            <div className="validation-error-message">please enter a valid email</div>
          );
        }
        break;
      case 'passwordLength':
        if (this.state.passwordLengthValid === false) {
          return (
            <div className="validation-error-message">please choose a password with at least 6 characters</div>
          );
        }
        break;
      case 'passwordPresence':
        if (this.state.passwordPresenceValid === false) {
          return (
            <div className="validation-error-message">please enter your password</div>
          );
        }
        break;
      case 'confirmPassword':
        if (this.state.confirmPasswordValid === false) {
          return (
            <div className="validation-error-message">the password you retyped is different, please check again</div>
          );
        }
        break;
    }
  }

  logInForm = () => {
    return (
      <div className="authentication-container">
        <div className="authentication-form-title">
          Log in
        </div>
        <form className="authentication-form" onSubmit={this.preLogIn}>
          <div className="authentication-form-items">
            <div className="authentication-form-messages">
              {this.messages()}
            </div>
            <div className={this.state.emailValid ? "form-item" : "invalid form-item"}>
              <input className="form-text-input no-select" type="text" name="email" autoComplete="username" placeholder="email" onChange={this.handleChange} />
            </div>
            {this.errorMessage('email')}
            <div className={this.state.passwordPresenceValid ? "form-item" : "invalid form-item"}>
              <input className="form-text-input no-select" type="password" name="password" autoComplete="current-password" placeholder="password" onChange={this.handleChange} />
            </div>
            {this.errorMessage('passwordPresence')}
          </div>
          <div className="authentication-form-actions">
            <button className="form-submit no-select" type="submit" value="Submit">log in</button>
          </div>
        </form>
      </div>
    );
  }

  signUpForm = () => {
    return (
      <div className="authentication-container">
        <div className="authentication-form-title">
          Sign up
        </div>
        <form className="authentication-form" onSubmit={this.preSignUp}>
          <div className="authentication-form-items">
            <div className="authentication-form-messages">
              {this.messages()}
            </div>
            <div className={this.state.nameValid ? "form-item" : "invalid form-item"}>
              <input className="form-text-input no-select" type="text" name="name" placeholder="name" onChange={this.handleChange} onBlur={this.validateField} />
            </div>
            {this.errorMessage('name')}
            <div className={this.state.emailValid ? "form-item" : "invalid form-item"}>
              <input className="form-text-input no-select" type="text" name="email" autoComplete="username" placeholder="email" onChange={this.handleChange} onBlur={this.validateField} />
            </div>
            {this.errorMessage('email')}
            <div className={this.state.passwordLengthValid ? "form-item" : "invalid form-item"}>
              <input className="form-text-input no-select" type="password" name="password" autoComplete="new-password" placeholder="password" onChange={this.handleChange} onBlur={this.validateField} />
            </div>
            {this.errorMessage('passwordLength')}
            <div className={this.state.confirmPasswordValid ? "form-item" : "invalid form-item"}>
              <input className="form-text-input no-select" type="password" name="confirmPassword" autoComplete="new-password" placeholder="re-type password" onChange={this.handleChange} onBlur={this.validateField} />
            </div>
            {this.errorMessage('confirmPassword')}
          </div>
          <div className="authentication-form-actions">
            <button className="form-submit no-select" type="submit" value="Submit">sign up</button>
          </div>
        </form>
      </div>
    );
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

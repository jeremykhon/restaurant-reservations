/* eslint-disable default-case */
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import Modal from 'react-modal';
import axios from 'axios';
import SelectableTimeSlot from './selectable_time_slot';
import ConfirmationModal from './confirmation_modal';
import addDays from '../utils/add_days';
import BASE_URL from '../utils/base_url';
import modalStyles from '../utils/modal_styles';

Modal.setAppElement('#root');

class BookingForm extends Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      date: new Date(),
      tableSize: '2',
      selectedTimeSlot: null,
      name: user ? user.name : '',
      email: user ? user.email : '',
      number: '',
      timeSlots: [],
      modalIsOpen: false,
      dateValid: true,
      selectedTimeSlotValid: true,
      nameValid: true,
      emailValid: true,
      numberValid: true,
    };
  }

  componentDidMount() {
    this.fetchTimeSlots();
  }

  componentWillReceiveProps(newProps) {
    const oldProps = this.props;
    if (oldProps.user !== newProps.user) {
      if (newProps.user) {
        this.setState({ name: newProps.user.name, email: newProps.user.email });
      } else {
        this.setState({ name: '', email: '' });
      }
    }
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  selectTimeSlot = (timeSlot) => {
    this.setState({ selectedTimeSlot: timeSlot, selectedTimeSlotValid: true });
  }

  fetchTimeSlots = () => {
    const { restaurant } = this.props;
    const { date } = this.state;
    const start = date.setHours(0, 0, 0, 0);
    const end = date.setHours(23, 59, 59, 999);
    axios.get(`${BASE_URL}/restaurants/${restaurant.id}/time_slots?start=${start}&end=${end}`)
      .then(response => this.setState({ timeSlots: response.data }))
      .catch(err => console.log(err));
  }

  handleChangeDate = (date) => {
    this.setState({ date }, this.fetchTimeSlots);
    this.setState({ selectedTimeSlot: null });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      this.openModal();
    }
  }

  validateField = (event) => {
    const fieldName = event.target.name;
    let { nameValid, emailValid, numberValid } = this.state;
    const { name, email, number } = this.state;
    switch (fieldName) {
      case 'name':
        nameValid = (/^[A-z ]{1,20}$/).test(name);
        this.setState({ nameValid });
        break;
      case 'email':
        emailValid = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
        this.setState({ emailValid });
        break;
      case 'number':
        numberValid = (/^[0-9][0-9]{5,15}$/).test(number);
        this.setState({ numberValid });
        break;
    }
  }

  validateForm = () => {
    let {
      dateValid, selectedTimeSlotValid, nameValid, emailValid, numberValid,
    } = this.state;
    const {
      date, name, selectedTimeSlot, number, email,
    } = this.state;

    dateValid = Object.prototype.toString.call(date) === '[object Date]';
    nameValid = (/^[A-z ]{1,20}$/).test(name);
    selectedTimeSlotValid = selectedTimeSlot !== null;
    emailValid = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
    numberValid = (/^[0-9]{5,15}$/).test(number);

    this.setState({
      dateValid,
      nameValid,
      selectedTimeSlotValid,
      emailValid,
      numberValid,
    });

    return (dateValid && nameValid && selectedTimeSlotValid && emailValid && numberValid);
  }

  errorMessage = (name) => {
    const {
      selectedTimeSlotValid, nameValid, emailValid, numberValid,
    } = this.state;
    switch (name) {
      case 'timeSlots':
        if (selectedTimeSlotValid === false) {
          return (
            <div className="validation-error-message">please select a time and discount</div>
          );
        }
        break;
      case 'name':
        if (nameValid === false) {
          return (
            <div className="validation-error-message">please enter your name</div>
          );
        }
        break;
      case 'email':
        if (emailValid === false) {
          return (
            <div className="validation-error-message">please enter a valid email address</div>
          );
        }
        break;
      case 'number':
        if (numberValid === false) {
          return (
            <div className="validation-error-message">please enter your phone number</div>
          );
        }
        break;
    }
    return null;
  }

  renderTimeSlots = () => {
    const { timeSlots, selectedTimeSlot } = this.state;
    if (timeSlots.length === 0) {
      return (
        <div className="no-time-slots">
          There are no reservations available for this day
        </div>
      );
    }
    return (
      <div className="time-slots-container">
        {timeSlots.map((timeSlot) => {
          return (
            <SelectableTimeSlot
              key={timeSlot.id}
              timeSlot={timeSlot}
              selectedTimeSlot={selectedTimeSlot}
              selectTimeSlot={this.selectTimeSlot}
            />
          );
        })}
      </div>
    );
  }

  renderFieldsIfLoggedIn = () => {
    const {
      name, nameValid, email, emailValid, number, numberValid,
    } = this.state;
    const { loggedIn, user, openLogInModal } = this.props;
    if (user) {
      return (
        <div>
          <div className={nameValid ? 'form-item' : 'invalid form-item'}>
            <i className="fas fa-user icon" />
            <input className="form-text-input no-select" type="text" name="name" value={name} onChange={this.handleChange} onBlur={this.validateField} placeholder="name" />
          </div>
          {this.errorMessage('name')}
          <div className={emailValid ? 'form-item' : 'form-item invalid'}>
            <i className="fas fa-envelope icon" />
            <input className="form-text-input no-select" type="text" name="email" value={email} onChange={this.handleChange} onBlur={this.validateField} placeholder="email" />
          </div>
          {this.errorMessage('email')}
          <div className={numberValid ? 'form-item' : 'form-item invalid'}>
            <i className="fas fa-phone icon" />
            <input className="form-text-input no-select" type="text" name="number" value={number} onChange={this.handleChange} onBlur={this.validateField} placeholder="number" />
          </div>
          {this.errorMessage('number')}
          <button className="booking-form-submit" type="submit" value="Submit">review reservation</button>
        </div>
      );
    }
    return (
      <div className="log-in-to-reserve" onClick={openLogInModal}>
        Please log in to reserve
      </div>
    );
  }

  render() {
    const {
      date,
      tableSize,
      dateValid,
      selectedTimeSlotValid,
      modalIsOpen,
    } = this.state;
    return (
      <div className="col-12 col-sm-5 order-1 order-sm-2">
        <div className="booking-form">
          <div className="booking-form-title">
            reservation details
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className={dateValid ? 'form-item' : 'form-item invalid'}>
              <i className="far fa-calendar-alt icon" />
              <DatePicker
                selected={date}
                onChange={this.handleChangeDate}
                dateFormat="MMMM d, yyyy"
                minDate={new Date()}
                maxDate={addDays(new Date(), 14)}
                className="form-date-input no-select"
              />
            </div>
            <div className="form-item">
              <i className="fas fa-user-friends icon" />
              <select className="form-select-input no-select" name="tableSize" defaultValue={tableSize} onChange={this.handleChange}>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5">5 people</option>
                <option value="6">6 people</option>
              </select>
            </div>
            <div className={selectedTimeSlotValid ? 'form-item' : 'form-item invalid'}>
              <div className="form-time-slots-container">
                <div className="form-label-vertical">
                  <i className="far fa-clock icon" />
                  <div className="label">choose time & discount</div>
                </div>
                {this.renderTimeSlots()}
              </div>
            </div>
            {this.errorMessage('timeSlots')}
            {this.renderFieldsIfLoggedIn()}
          </form>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Confirm Modal"
          style={modalStyles}
        >
          <ConfirmationModal closeModal={this.closeModal} bookingForm={this.state} />
        </Modal>
      </div>
    );
  }
}
export default BookingForm;

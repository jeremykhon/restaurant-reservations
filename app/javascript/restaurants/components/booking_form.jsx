/* eslint-disable default-case */
import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
import Modal from 'react-modal';
import SelectableTimeSlot from './selectable_time_slot';
import ConfirmationModal from './confirmation_modal';
import addDays from '../utils/add_days';
import BASE_URL from '../utils/base_url';
import 'react-datepicker/dist/react-datepicker.css';
import modalStyles from '../utils/modal_styles';

Modal.setAppElement('#root');

class BookingForm extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      tableSize: '2',
      selectedTimeSlot: null,
      name: '',
      email: '',
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

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  selectTimeSlot = (timeSlot) => {
    this.setState({ selectedTimeSlot: timeSlot, selectedTimeSlotValid: true })
  }

  fetchTimeSlots = () => {
    const { restaurant } = this.props;
    const start = this.state.date.setHours(0, 0, 0, 0);
    const end = this.state.date.setHours(23, 59, 59, 999);
    fetch(`${BASE_URL}/restaurants/${restaurant.id}/time_slots?start=${start}&end=${end}`)
      .then(response => response.json())
      .then(data => this.setState({ timeSlots: data }));
  }

  handleChangeDate = (date) => {
    this.setState({ date: date }, this.fetchTimeSlots);
    this.setState({ selectedTimeSlot: null });
  }

  handleChange = (event) => {
    const target = event.target
    const name = target.name;
    this.setState({ [name]: target.value });
  }


  validateField = (event) => {
    const name = event.target.name
    let nameValid = this.state.nameValid
    let emailValid = this.state.emailValid
    let numberValid = this.state.numberValid

    switch (name) {
      case 'name':
        nameValid = (/^[A-z ]{1,20}$/).test(this.state.name)
        this.setState({ nameValid });
        break;
      case 'email':
        emailValid = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(this.state.email)
        this.setState({ emailValid });
        break;
      case 'number':
        numberValid = (/^[0-9][0-9]{5,15}$/).test(this.state.number)
        this.setState({ numberValid });
        break;
    }
  }

  validateForm = () => {
    let dateValid = this.state.dateValid
    let selectedTimeSlotValid = this.state.selectedTimeSlotValid
    let nameValid = this.state.nameValid
    let emailValid = this.state.emailValid
    let numberValid = this.state.numberValid

    dateValid = Object.prototype.toString.call(this.state.date) === "[object Date]"
    nameValid = (/^[A-z ]{1,20}$/).test(this.state.name)
    selectedTimeSlotValid = this.state.selectedTimeSlot !== null
    emailValid = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(this.state.email)
    numberValid = (/^[0-9]{5,15}$/).test(this.state.number) 

    this.setState({
      dateValid,
      nameValid,
      selectedTimeSlotValid,
      emailValid,
      numberValid,
    });

    return (dateValid && nameValid && selectedTimeSlotValid && emailValid && numberValid)
  }

  errorMessage = (name) => {
    switch(name) {
      case 'timeSlots':
        if (this.state.selectedTimeSlotValid === false) {
          return (
            <div className="validation-error-message">please select a time and discount</div>
          );
        }
        break;
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
            <div className="validation-error-message">please enter a valid email address</div>
          );
        }
        break;
      case 'number':
        if (this.state.numberValid === false) {
          return (
            <div className="validation-error-message">please enter your phone number</div>
          );
        }
        break;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      this.openModal()
    }
  }

  render() {
    const { timeSlots } = this.state
    return (
      <div className="col-12 col-sm-5">
        <div className="booking-form">
          <div className="booking-form-title">
            reservation details
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className={this.state.dateValid ? "form-item" : "form-item invalid"} >
              <DatePicker
                selected={this.state.date}
                onChange={this.handleChangeDate}
                dateFormat="MMMM d, yyyy"
                minDate={new Date()}
                maxDate={addDays(new Date(), 14)}
                className="form-date-input no-select"
              />
            </div>
            <div className="form-item">
              <select className="form-select-input no-select" name="tableSize" defaultValue={this.state.tableSize} onChange={this.handleChange}>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5">5 people</option>
                <option value="6">6 people</option>
              </select>
            </div>
            <div className={this.state.selectedTimeSlotValid ? "form-item" : "form-item invalid"}>
              <div className="form-label-vertical">
                choose time & discount
              </div>
              <div className="time-slots-container">
                {timeSlots.map(timeSlot => <SelectableTimeSlot key={timeSlot.id} timeSlot={timeSlot} selectedTimeSlot={this.state.selectedTimeSlot} selectTimeSlot={this.selectTimeSlot}/>)}
              </div>
            </div>
            {this.errorMessage("timeSlots")}
            <div className={this.state.nameValid ? "form-item" : "invalid form-item"}>
              <input className="form-text-input no-select" type="text" name="name" value={this.state.name} onChange={this.handleChange} onBlur={this.validateField} placeholder="name" />
            </div>
            {this.errorMessage("name")}
            <div className={this.state.emailValid ? "form-item" : "form-item invalid"}>
              <input className="form-text-input no-select" type="text" name="email" value={this.state.email} onChange={this.handleChange} onBlur={this.validateField} placeholder="email" />
            </div>
            {this.errorMessage("email")}
            <div className={this.state.numberValid ? "form-item" : "form-item invalid"}>
              <input className="form-text-input no-select" type="text" name="number" value={this.state.number} onChange={this.handleChange} onBlur={this.validateField} placeholder="number"/>
            </div>
            {this.errorMessage("number")}
            <button className="booking-form-submit" type="submit" value="Submit">review reservation</button>
          </form>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Confirm Modal"
          style={modalStyles}
        >
          <ConfirmationModal closeModal={this.closeModal} bookingForm={this.state}/>
        </Modal>
      </div>
    );
  }
}
export default BookingForm;

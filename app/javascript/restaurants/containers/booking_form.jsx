import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
import Modal from 'react-modal';
import SelectableTimeSlot from './selectable_time_slot';
import ConfirmationModal from './confirmation_modal';
import addDays from '../utils/add_days';
import "react-datepicker/dist/react-datepicker.css";

const BASE_URL = '/api/v1';
const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

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
      tableSizeValid: true,
      selectedTimeSlotValid: true,
      nameValid: true,
      emailValid: true,
      numberValid: true,
    };
  }
  
  componentDidMount() {
    this.fetchTimeSlots()
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  selectTimeSlot = (timeSlot) => {
    this.setState({ selectedTimeSlot: timeSlot })
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
    this.setState({date: date}, this.fetchTimeSlots)
    this.setState({selectedTimeSlot: null})
  }

  handleChange = (event) => {
    const target = event.target
    const name = target.name;
    this.setState({[name]: target.value});
  }

  validateForm = () => {
    let dateValid = this.state.dateValid
    let selectedTimeSlotValid = this.state.selectedTimeSlotValid
    let nameValid = this.state.nameValid
    let emailValid = this.state.emailValid
    let numberValid = this.state.numberValid

    dateValid = Object.prototype.toString.call(this.state.date) === "[object Date]"
    nameValid = this.state.name.length > 0
    selectedTimeSlotValid = this.state.selectedTimeSlot !== null
    emailValid = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(this.state.email)
    numberValid = (/[0-9]{5,15}/).test(this.state.number)

    this.setState({dateValid: dateValid,
                  nameValid: nameValid,
                  selectedTimeSlotValid: selectedTimeSlotValid,
                  emailValid: emailValid,
                  numberValid: numberValid,
                  });

    return (dateValid && nameValid && selectedTimeSlotValid && emailValid && numberValid)
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
            <div className={this.state.dateValid ? "booking-form-date" : "booking-form-date invalid"} >
              <DatePicker
                selected={this.state.date}
                onChange={this.handleChangeDate}
                dateFormat="MMMM d, yyyy"
                minDate={new Date()}
                maxDate={addDays(new Date(), 14)}
                className="booking-form-date-input no-select"
              />
            </div>
            <div className="booking-form-tablesize">
              <select className="booking-form-select-input no-select" name="tableSize" defaultValue={this.state.tableSize} onChange={this.handleChange}>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5">5 people</option>
                <option value="6">6 people</option>
              </select>
            </div>
            <div className={this.state.selectedTimeSlotValid ? "booking-form-timeslots" : "booking-form-timeslots invalid"}>
              <div className="form-label-vertical">
                choose time & discount
              </div>
              <div className="time-slots-container">
                {timeSlots.map(timeSlot => <SelectableTimeSlot key={timeSlot.id} timeSlot={timeSlot} selectedTimeSlot={this.state.selectedTimeSlot} selectTimeSlot={this.selectTimeSlot}/>)}
              </div>
            </div>
            <div className={this.state.nameValid ? "booking-form-name" : "invalid booking-form-name"}>
              <input className="booking-form-text-input no-select" type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="name" />
            </div>
            <div className={this.state.emailValid ? "booking-form-email" : "booking-form-email invalid"}>
              <input className="booking-form-text-input no-select" type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email" />
            </div>
            <div className={this.state.numberValid ? "booking-form-number" : "booking-form-number invalid"}>
              <input className="booking-form-text-input no-select" type="text" name="number" value={this.state.number} onChange={this.handleChange} placeholder="number"/>
            </div>
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

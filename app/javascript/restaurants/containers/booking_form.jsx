import React, { Component } from 'react';
import Modal from 'react-modal';
import SelectableTimeSlot from './selectable_time_slot';
import ConfirmationModal from './confirmation_modal';
import formatDate from '../utils/yymmdd_date';

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
      date: formatDate(new Date()),
      tableSize: '',
      selectedTimeSlot: null,
      name: '',
      email: '',
      number: '',
      timeSlots: [],
      modalIsOpen: false,
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
    const start = new Date(this.state.date).setHours(0, 0, 0, 0);
    const end = new Date(this.state.date).setHours(23, 59, 59, 999);
    fetch(`${BASE_URL}/restaurants/${restaurant.id}/time_slots?start=${start}&end=${end}`)
      .then(response => response.json())
      .then(data => this.setState({ timeSlots: data }));
  }

  handleChangeTimeSlots = (event) => {
    const target = event.target
    const name = target.name;

    if (target.value !== "") {
      this.setState({[name]: target.value}, this.fetchTimeSlots)
    } else {
      this.setState({[name]: target.value});
    }
    this.setState({selectedTimeSlot: null})
  }

  handleChange = (event) => {
    const target = event.target
    const name = target.name;
    this.setState({[name]: target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // this.validate()
    // this.openModal()
  }

  render() {
    const { timeSlots } = this.state
    return (
      <div className="col-12 col-sm-5">
        <div className="booking-form">
          <form onSubmit={this.handleSubmit}>
            <div className="bookingform-date">
              <input type="date" name="date" value={this.state.date} onChange={this.handleChangeTimeSlots} />
            </div>
            <div className="bookingform-tablesize">
              <select name="tableSize" onChange={this.handleChange}>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5">5 people</option>
                <option value="6">6 people</option>
              </select>
            </div>
            <div className="bookingform-name">
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
            </div>
            <div className="bookingform-email">
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
            </div>
            <div className="bookingform-number">
              <input type="text" name="number" value={this.state.number} onChange={this.handleChange} placeholder="Number"/>
            </div>
            <div className="bookingform-submit">
              <input type="submit" value="Submit" />
            </div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="Confirm Modal"
              style={modalStyles}
            >
              <ConfirmationModal bookingForm={this.state}/>
            </Modal>
          </form>
          {timeSlots.map(timeSlot => <SelectableTimeSlot key={timeSlot.id} timeSlot={timeSlot} selectedTimeSlot={this.state.selectedTimeSlot} selectTimeSlot={this.selectTimeSlot}/>)}
        </div>
      </div>
    );
  }
}
export default BookingForm;

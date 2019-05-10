import React, { Component } from 'react';
import SelectableTimeSlot from './selectable_time_slot'
import { ninvoke } from 'q';

const BASE_URL = '/api/v1';

class BookingForm extends Component {
  constructor() {
    super();
    this.state = {
      date: this.formatDate(new Date()),
      tableSize: '',
      selectedTimeSlot: null,
      name: '',
      email: '',
      number: '',
      timeSlots: []
    };
  }
  
  componentDidMount() {
    this.fetchTimeSlots()
  }

  selectTimeSlot = (timeSlotId) => {
    this.setState({ selectedTimeSlot: timeSlotId })
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

  formatDate = (date) => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  handleChange = (event) => {
    const target = event.target
    const name = target.name;
    this.setState({[name]: target.value});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.date);
    event.preventDefault();
  }

  render() {
    const { timeSlots } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Date:
            <input type="date" name="date" value={this.state.date} onChange={this.handleChangeTimeSlots} />
          </label>
          <label>
            Number of People:
            <input type="number" name="tableSize" value={this.state.tableSize} onChange={this.handleChange} />
          </label>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Number:
            <input type="text" name="number" value={this.state.number} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {timeSlots.map(timeSlot => <SelectableTimeSlot key={timeSlot.id} timeSlot={timeSlot} selectedTimeSlot={this.state.selectedTimeSlot} selectTimeSlot={this.selectTimeSlot}/>)}
      </div>
    );
  }
}
export default BookingForm;

import React, { Component } from 'react';

const BASE_URL = '/api/v1';

class BookingForm extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      tableSize: '',
      timeSlotId: '',
      name: '',
      email: '',
      number: '',
    };
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
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Date:
          <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
        </label>
        <label>
          Number of People:
          <input type="number" name="tableSize" value={this.state.tableSize} onChange={this.handleChange} />
        </label>
        <label>
          TimeSlot:
          <input type="text" name="timeSlotId" value={this.state.timeSlotId} onChange={this.handleChange} />
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
    );
  }
}
export default BookingForm;

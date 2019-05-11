import React, { Component } from 'react';
import hhmmTime from '../utils/hhmm_time';

class SelectableTimeSlot extends Component {
  handleClick = (event) => {
    this.props.selectTimeSlot(this.props.timeSlot)
  }

  selectedStyle = () => {
    if (this.props.selectedTimeSlot === this.props.timeSlot) {
      return {"color": "red"}
    }
  }

  render() {
    const { timeSlot } = this.props
    const time = hhmmTime(new Date(timeSlot.time));
    return (
      <div style={this.selectedStyle()} className="timeSlot" onClick={this.handleClick}>
        {time}
      </div>
    );
  }
}

export default SelectableTimeSlot;

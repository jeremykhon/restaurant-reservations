import React, { Component } from 'react';
import hhmmTime from '../utils/hhmm_time';

class SelectableTimeSlot extends Component {
  handleClick = (event) => {
    this.props.selectTimeSlot(this.props.timeSlot)
  }

  selectedStyle = () => {
    if (this.props.selectedTimeSlot === this.props.timeSlot) {
      return {"backgroundColor": "#ed9102"}
    }
  }

  render() {
    const { timeSlot } = this.props
    const time = hhmmTime(timeSlot.time);
    return (
      <div style={this.selectedStyle()} className="time-slot" onClick={this.handleClick}>
        <div className="time-slot-time">
          {time}
        </div>
        <div className="time-slot-discount">
          {`-${timeSlot.discount}%`}
        </div>
      </div>
    );
  }
}

export default SelectableTimeSlot;

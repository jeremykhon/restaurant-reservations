import React, { Component } from 'react';
import hhmmTime from '../utils/hhmm_time';

class SelectableTimeSlot extends Component {
  handleClick = () => {
    const { selectTimeSlot, timeSlot } = this.props;
    selectTimeSlot(timeSlot);
  }

  selectedStyle = () => {
    const { selectedTimeSlot, timeSlot } = this.props;
    if (selectedTimeSlot) {
      if (selectedTimeSlot.id === timeSlot.id) {
        return {"backgroundColor": "#ed9102"};
      }
    }
    return null;
  }

  render() {
    const { timeSlot } = this.props
    const time = hhmmTime(timeSlot.time);
    if (timeSlot) {
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
    return null;
  }
}

export default SelectableTimeSlot;

import React, { Component } from 'react';
import hhmmTime from '../utils/hhmm_time';

class SelectableTimeSlot extends Component {
  handleClick = () => {
    const { selectTimeSlot, timeSlot } = this.props;
    selectTimeSlot(timeSlot.id);
  }

  selectedStyle = () => {
    const { selectedTimeSlotId, timeSlot } = this.props;
    if (selectedTimeSlotId === timeSlot.id) {
      return {"backgroundColor": "#ed9102"};
    }
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

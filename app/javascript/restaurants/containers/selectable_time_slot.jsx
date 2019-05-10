import React, { Component } from 'react';

class SelectableTimeSlot extends Component {
  strfTime = (time) => {
    const checkTime = (i) => {
      return (i < 10) ? "0" + i : i;
    };
    const hh = checkTime(time.getHours());
    const mm = checkTime(time.getMinutes());
    return `${hh}:${mm}`;
  };

  handleClick = (event) => {
    this.props.selectTimeSlot(this.props.timeSlot.id)
  }

  selectedStyle = () => {
    if (this.props.selectedTimeSlot === this.props.timeSlot.id) {
      return {"color": "red"}
    }
  }

  render() {
    const { timeSlot } = this.props
    const time = this.strfTime(new Date(timeSlot.time));
    return (
      <div style={this.selectedStyle()} className="timeSlot" onClick={this.handleClick}>
        {time}
      </div>
    );
  }
}

export default SelectableTimeSlot;

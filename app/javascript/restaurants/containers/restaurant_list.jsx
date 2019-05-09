import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { fetchMessages, appendMessage } from '../actions/index';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    const { messages } = this.props;
    return (
      <div className="messages-container">
        <div className="channel-title">{`#${this.props.selectedChannel}`}</div>
        <div className="message-list" ref={(list) => { this.list = list; }}>
          {this.groupByDate(messages)}
        </div>
        {<MessageForm selectedChannel={this.props.selectedChannel} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchRestaurants },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

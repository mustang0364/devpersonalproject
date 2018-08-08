import React, { Component } from 'react';

import './sms.css';

class SMS extends Component {

  state = {
    text: {
      recipient: '',
      textmessage: ''
    }
  }

  sendText = _ => {
    const { text } = this.state;
    //pass text message GET variables via query string
    fetch(`http://127.0.0.1:4000/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
    .catch(err => console.error(err))
  }

  render() {
    const { text } = this.state;
    const spacer = {
      margin: 8
    }
    const textArea = {
      borderRadius: 4
    }
    return (
      <div className="Sms">
        <header className="Sms-header">
      
     
        </header>
        <div style={{ marginTop: 30}} >
          <h3> Please leave your phone number and any question or suggestion below: </h3>
          <label> Your Phone Number </label>
          <br />
          <input className="number" value={text.recipient}
            onChange={e => this.setState({ text: { ...text, recipient: e.target.value } })} />
          <div style={spacer} />
          <label> Message </label>
          <br />
          <textarea rows={3} value={text.textmessage} style={textArea}
            onChange={e => this.setState({ text: { ...text, textmessage: e.target.value } })} />
          <div style={spacer} />
          <button className="send" onClick={this.sendText}> Send Text </button>
        </div>
      </div>
    );
  }
}

export default SMS;
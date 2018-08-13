import React, { Component } from 'react';
import Cuba from '../Cuba';
import Grid from '../SendGrid/Grid';

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
    //the http have to bbe the same port that you are running your server(port running 3040)
    fetch(`http://127.0.0.1:3040/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
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
        <div style={{ marginTop: 10 }} >
          <h2> Send Text Message </h2>
          <label> Your Phone Number </label>
          <br />
          {/* <input value={text.recipient}
            onChange={e => this.setState({ text: { ...text, recipient: e.target.value } })} />
          <div style={spacer} />
          <label> Message </label> */}
          <br />
          <textarea rows={1} value={text.textmessage} style={textArea}
            onChange={e => this.setState({ text: { ...text, textmessage: e.target.value } })} />
          <div style={spacer} />
          <button onClick={this.sendText}> Send Text </button>
          <Grid/>
        </div>





        
      </div>



    );
  }
}

export default SMS;
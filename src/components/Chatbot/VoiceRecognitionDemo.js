import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VoiceRecognition from './lib/VoiceRecognition.js';

class VoiceRecognitionDemo extends Component {
  
  constructor() {
    super();

    this._sttEnd = this._sttEnd.bind(this);
    this._sttResult = this._sttResult.bind(this);
    this._sttStart = this._sttStart.bind(this);

    this.state = {
      sttStart: false,
      sttStop: false,
    };
  }

  _sttEnd = () => {
    this.setState({ sttStart: false, sttStop: false });
    console.log('end');
  }

  _sttResult = ({ finalTranscript }) => {
    const result = finalTranscript;
    console.log(result);
    this.setState({ sttStart: false });
  }

  _sttStart() {
    this.setState({ sttStart: true });
  }

  render () {
    return (
      <div>
        <button onClick={this._sttStart}>start</button>
        <button onClick={this._sttEnd}>stop</button>

        {this.state.sttStart && (
          <VoiceRecognition
            onStart={this.sttStart}
            onEnd={this._sttEnd}
            onResult={this._sttResult}
            continuous={true}
            lang="en-US"
            stop={this.state.sttStop}
          />
          
        )}
      </div>
    );
  }
}

VoiceRecognitionDemo.propTypes = {
  action: PropTypes.func,
};

export default VoiceRecognitionDemo;


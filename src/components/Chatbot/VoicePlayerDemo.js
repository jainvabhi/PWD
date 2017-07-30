import React, { Component } from 'react';
import PropTypes from 'prop-types';

import VoicePlayer from './lib/VoicePlayer.js';

class VoicePlayerDemo extends Component {
  constructor() {
    super();
    this._ttsTextChange = this._ttsTextChange.bind(this);
    this._ttsEnd = this._ttsEnd.bind(this);
    this._ttsStart = this._ttsStart.bind(this);

    this.state = {
      ttsPlay: false,
      ttsPause: false,
      ttsText: 'Welcome to the jungle! We got fun and games',
    };
  }

  _ttsTextChange = (event) => {
    const ttsText = event.target.value;
    this.setState({ ttsText });
  }

  _ttsEnd = () => {
    this.setState({ ttsPlay: false }, () => {
      console.log('end');
    });
  }

  _ttsStart(e) {
    console.log(e);
    this.setState({ ttsPlay: true, voiceReco: false });
  }

  render () {
    return (
      <div>
        <button onClick={() => this.setState({ ttsPlay: true })}>Voice Play</button>
        {this.state.ttsPlay && (
          <VoicePlayer
            play
            pause={this.state.ttsPause}
            text={this.state.ttsText}
            onStart={this._ttsStart}
            _ttsEnd={this._ttsEnd}
          />
        )}
      </div>
    );
  }
}

VoicePlayerDemo.propTypes = {
  action: PropTypes.func,
};


export default VoicePlayerDemo;


import React, { Component } from 'react';
import PropTypes from 'prop-types';

import VoicePlayer from './lib/VoicePlayer.js';
import VoiceRecognition from './lib/VoiceRecognition.js';
import BotCard from './BotCard';
import LoadingSvg from '../Auth/LoadingSvg';
import ChatBotSvg from './ChatBotSvg';

class VoicePlayerDemo extends Component {
  constructor() {
    super();
    this._ttsTextChange = this._ttsTextChange.bind(this);
    this._ttsEnd = this._ttsEnd.bind(this);
    this._ttsStart = this._ttsStart.bind(this);

    this._sttEnd = this._sttEnd.bind(this);
    this._sttResult = this._sttResult.bind(this);
    this._sttStart = this._sttStart.bind(this);

    this.state = {
      ttsPlay: false,
      ttsPause: false,
      ttsText: 'Good Morning Doctor, you have a appointement in next 10 min with Abhishek Jain!',
      sttStart: false,
      sttStop: false,
    };
  }

  _ttsTextChange = (event) => {
    const ttsText = event;
    this.setState({ ttsText }, () => {
      console.log('Text Chagne ==> ttsTextChange');
    });
  }

  _ttsEnd = () => {
    this.setState({ ttsPlay: false }, () => {
      this._sttStart();
      console.log('End ==> ttsEnd');
    });
  }

  _ttsStart(e) {
    this.setState({ ttsPlay: true, sttStart: false }, () => {
      console.log('Start ==> ttsStarted');
      console.log(e);
    });
  }

  _sttEnd = () => {
    this.setState({ sttStart: false, sttStop: false }, () => {
      console.log('End ==> sttEnd');
    });
    
  }

  _sttResult = ({ finalTranscript }) => {
    const result = finalTranscript;
    this.setState({ sttStart: false }, () => {
      console.log('Speech to Text Result ==> sttResult');
      console.log(result);
    });
  }

  _sttStart() {
    this.setState({ sttStart: true }, () => {
      console.log('Speech to text Started ==> sttStart');
    });
  }

  render () {   
    let button = (
      <button className="chatbot-btn default" onClick={this._ttsStart}>
        <ChatBotSvg />
      </button>
    );

    if (this.state.ttsPlay) {
      button = (
        <button className="chatbot-btn speaking" onClick={this._ttsEnd}>
          <LoadingSvg />
          <span>Speaking...</span>
        </button>
      );
    }

    if(this.state.sttStart) {
      button = (
        <button className="chatbot-btn listening" onClick={this._sttEnd}>
          <LoadingSvg />
          <span>Listening...</span>
        </button>
      );
    }

    return (
      <div>
        <div className="chatbot">
          {button}
          {!this.state.ttsPlay && ( <BotCard audioText={this.state.ttsText}/>)}
        </div>
        {this.state.ttsPlay && (
          <VoicePlayer
            play={this._ttsStart}
            pause={this.state.ttsPause}
            text={this.state.ttsText}
            onStart={this._ttsStart}
            onEnd={this._ttsEnd}
          />
        )}
        {this.state.sttStart && (
          <VoiceRecognition
            onStart={this._sttStart}
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

VoicePlayerDemo.propTypes = {
  action: PropTypes.func,
};


export default VoicePlayerDemo;


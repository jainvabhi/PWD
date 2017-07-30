import React, { Component } from 'react';
import _ from 'lodash';
import VoiceRecognition from './VoiceRecognition';
import PropTypes from 'prop-types';
import Bot from './Bot';

class ChatBot extends Component {
  constructor(props) {
    super(props);
    this._onEnd = this._onEnd.bind(this);
    this._onStart = this._onStart.bind(this);
    this._reset = this._reset.bind(this);
    this.onResult = this.onResult.bind(this);
    this._onSpeekClick = this._onSpeekClick.bind(this);
    this.playAudio = this.playAudio.bind(this);
    
    this.state = {
      start: false,
      stop: false,
      listening: false,
      audioText: 'Hello I am your overgood advisor, how can i help you? Please use Quit or Goodby to shut me down.',
      audioUrl: '',
      speekButton: true,
    }
  }
  
  _onStart(e) {
    this.setState({ start: true, listening: true });
    console.log(e);
    // if (typeof(e) === 'string' ) {
    //   const speechText = `${this.state.page} ${e}`;
    //   this._callIntentApi(speechText);
    // }
  }

  _onEnd() {
    this.setState({ listening: false, start: false, stop: false });
  }

  onResult = ({ finalTranscript }) => {
    // const result = finalTranscript;
    console.log(finalTranscript);
    this.setState({ start: false });
    this._onStart(finalTranscript);
  }
  
  _reset() {
    this.setState({ audioText: '', audioUrl: '', listening: false, stop: true });
  }

  _onSpeekClick() {
    this.setState({ speekButton: false }, () => this.playAudio(this.state.audioText));
  }

  playAudio(blob, audiotext) {
    const url = window.URL.createObjectURL(blob);
    this.setState({ loading: false, ttsFetched: true, audioUrl: url, audioText: audiotext }, () => {
      const audio = document.querySelector('audio#audio');
      setTimeout(() => {
        const duration = (audio.duration) * 1000;
        if (this.state.speekButton) {
          setTimeout(() => this.setState({ audioText: 'Hello I am your overgood advisor, how can i help you? Please use Quit or Goodby to shut me down.', audioUrl: '', speekButton: true }), duration);
        } else {
          setTimeout(() => this._onStart(), duration);
        }
        
      }, 500);
    });
    // const audio = document.getElementById('audio');
    // audio.setAttribute('src', url);
    // audio.setAttribute('type', 'audio/ogg;codecs=opus');
  }
  
  
  render () {
    return (
      <div>
        <Bot
          audioUrl={this.state.audioUrl}
          audioText={this.state.audioText}
          listening={this.state.listening}
          loading={this.state.loading}
          ttsFetching={false}
          ttsFetched={false}
          audioSource='mic'
          onStart={this._onStart}
          reset={this._reset}
          speekButton={this.state.speekButton}
          onSpeekClick={this._onSpeekClick}
        />
        {this.state.start && (
          <VoiceRecognition
            onStart={this._onStart}
            onEnd={this._onEnd}
            onResult={this.onResult}
            continuous={true}
            lang="en-US"
            stop={this.state.stop}
          />
        )}
      </div>
    );
  }
}

ChatBot.propTypes = {
  onStart: PropTypes.func,
  onEnd: PropTypes.func,
  audioText: PropTypes.string,
  audioUrl: PropTypes.string,
  audioSource: PropTypes.string,
  ttsFetched: PropTypes.bool,
  ttsFetching: PropTypes.bool,
  loading: PropTypes.bool,
  listening: PropTypes.bool,
  startSTT: PropTypes.bool,
  dispatch: PropTypes.func,
  
  audiotext: PropTypes.string,
  botFetched: PropTypes.bool,
  stopBot: PropTypes.bool,
  intent: PropTypes.object,
};

export default ChatBot;
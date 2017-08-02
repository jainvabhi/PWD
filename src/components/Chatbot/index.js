import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import VoicePlayer from './lib/VoicePlayer.js';
import VoiceRecognition from './lib/VoiceRecognition.js';
import BotCard from './BotCard';
import LoadingSvg from '../Auth/LoadingSvg';
// import ChatBotSvg from './ChatBotSvg';
import assistentIcon from '../../assets/images/girl.svg';
import defaultAvatar from '../../assets/images/defaultAvatar.png';
import hospitalIcon from '../../assets/images/hospitalIcon.png';

class ChatBot extends Component {
  constructor(props) {
    super(props);
    this._ttsTextChange = this._ttsTextChange.bind(this);
    this._ttsEnd = this._ttsEnd.bind(this);
    this._ttsStart = this._ttsStart.bind(this);

    this._sttEnd = this._sttEnd.bind(this);
    this._sttResult = this._sttResult.bind(this);
    this._sttStart = this._sttStart.bind(this);

    this.state = {
      ttsPlay: false,
      ttsPause: false,
      ttsText: '',
      sttStart: false,
      sttStop: false,
      step: 1,
      doctorName: '',
    };
  }

  componentWillMount() {
    console.log(this.props);
    const doctorName = _.split(this.props.user.webcam.name, ' ')[0];
    this.setState({
      doctorName: doctorName,
      ttsText: `Good Morning Doctor ${doctorName}, you have a appointement in next 10 min with Samy Haydon!`,
    });

    this.props.getPatient('Samy Haydon');
  }

  _ttsTextChange = event => {
    const ttsText = event;
    this.setState({ ttsText }, () => {
      console.log('Text Chagne ==> ttsTextChange');
    });
  };

  _ttsEnd = () => {
    console.log(this.state.step);
    this.setState({ ttsPlay: false }, () => {
      if (this.state.step === 2) {
        this.props.showPatientModal();
        this.setState(
          {
            step: 3,
            ttsText:
              'Hey Doctor! Would you like to view full medical information of Samy Haydon',
          },
          () => {
            setTimeout(() => this._ttsStart(), 5000);
          },
        );
      } else if (this.state.step === 4) {
        this.props.getPhiDetail('Samy Haydon');

        this.setState(
          { step: 5, ttsText: 'Doctor!, Can I do something else for you?' },
          () => {
            setTimeout(() => this._ttsStart(), 5000);
          },
        );
      } else if (this.state.step === 7) {
        console.log(this.props);
        this.props.hospitalChatBot();
        this.setState(
          {
            step: 8,
            ttsText: 'Hello sir, I am HCA Assistent, How can I serve you?',
          },
          () => {
            this._ttsStart();
          },
        );
      } else if (this.state.step === 10) {
        console.log(this.props);
        this.props.hospitalChatBotClose();
        const doctorName = _.split(this.props.user.webcam.name, ' ')[0];
        this.setState({
          doctorName: doctorName,
          ttsText: `Good Morning Doctor ${doctorName}, you have a appointement in next 10 min with Samy Haydon!`,
        });
      } else if (
        this.state.step === 1 ||
        this.state.step === 0 ||
        this.state.step === 3 ||
        this.state.step === 5 ||
        this.state.step === 6 ||
        this.state.step === 8 ||
        this.state.step === 9
      ) {
        this._sttStart();
      }
      console.log('End ==> ttsEnd');
    });
  };

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
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  _sttResult = ({ finalTranscript }) => {
    const result = finalTranscript;
    console.log(this.state.step);
    this.setState({ sttStart: false }, () => {
      console.log('Speech to Text Result ==> sttResult');
      console.log(result);

      if (
        result.indexOf('quick') >= 0 ||
        result.indexOf('detail') >= 0 ||
        result.indexOf('information') >= 0 ||
        result.indexOf('info') >= 0
      ) {
        console.log('patient Modal');
        this.setState(
          {
            step: 2,
            ttsText: 'Sure, Let me show you her quick medical information',
          },
          () => {
            this._ttsStart();
          },
        );
      } else if (result.indexOf('PHI') >= 0) {
        console.log('gotToPhi');
        this.props.getPhiDetail('Samy Haydon');
      } else if (
        (result.indexOf('yes') >= 0 && this.state.step === 3) ||
        (result.indexOf('please') >= 0 && this.state.step === 3)
      ) {
        console.log('inside Step 3');
        this.setState(
          {
            step: 4,
            ttsText: "Ok, I will show Samy Haydon's Full Medical Detail.",
          },
          () => {
            this._ttsStart();
          },
        );
      } else if (
        (result.indexOf('Book') >= 0 && this.state.step === 5) ||
        (result.indexOf('appointment') >= 0 && this.state.step === 5)
      ) {
        console.log('Hospital Assistent');
        this.setState(
          { step: 6, ttsText: 'Can I book appointment in HCA hospital!' },
          () => {
            this._ttsStart();
          },
        );
      } else if (
        (result.indexOf('yes') >= 0 && this.state.step === 6) ||
        (result.indexOf('ok') >= 0 && this.state.step === 6)
      ) {
        this.setState(
          {
            step: 7,
            ttsText:
              'Please wait, I will bring you the HCA hospital assistent bot for you.',
          },
          () => {
            this._ttsStart();
          },
        );
      } else if (
        (result.indexOf('book') >= 0 && this.state.step === 8) ||
        (result.indexOf('appointment') >= 0 && this.state.step === 8)
      ) {
        this.setState(
          {
            step: 9,
            ttsText:
              'Tomorrow will be the Next available slot for MRI, please confirm',
          },
          () => {
            this._ttsStart();
          },
        );
      } else if (
        (result.indexOf('confirm') >= 0 && this.state.step === 9) ||
        (result.indexOf('ok') >= 0 && this.state.step === 9)
      ) {
        this.setState(
          {
            step: 10,
            ttsText: 'Thank you! your appointment booked successfully!',
          },
          () => {
            this._ttsStart();
          },
        );
      } else {
        this.setState(
          {
            step: this.state.step,
            ttsText:
              'Sorry Doctor!, I am unable recognize your voice, please try again!',
          },
          () => {
            this._ttsStart();
          },
        );
      }
    });
  };

  _sttStart() {
    this.setState({ sttStart: true }, () => {
      console.log('Speech to text Started ==> sttStart');
    });
  }

  render() {
    // console.log(this.props.user.hospital)
    let button = (
      <button className="chatbot-btn default" onClick={this._ttsStart}>
        {this.props.user.hospital
          ? <img src={hospitalIcon} />
          : <img src={defaultAvatar} />}
      </button>
    );

    if (this.state.ttsPlay) {
      button = (
        <button className="chatbot-btn speaking" onClick={this._ttsEnd}>
          {this.props.user.hospital
            ? <img src={hospitalIcon} />
            : <img src={defaultAvatar} />}
        </button>
      );
    }

    if (this.state.sttStart) {
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
          {this.state.ttsPlay && <BotCard audioText={this.state.ttsText} />}
        </div>
        {this.state.ttsPlay &&
          <VoicePlayer
            play={this._ttsStart}
            pause={this.state.ttsPause}
            text={this.state.ttsText}
            onStart={this._ttsStart}
            onEnd={this._ttsEnd}
          />}
        {this.state.sttStart &&
          <VoiceRecognition
            onStart={this._sttStart}
            onEnd={this._sttEnd}
            onResult={this._sttResult}
            continuous={true}
            lang="en-US"
            stop={this.state.sttStop}
          />}
      </div>
    );
  }
}

ChatBot.propTypes = {
  user: PropTypes.object,
  action: PropTypes.func,
  getPatient: PropTypes.func,
  getPhiDetail: PropTypes.func,
  showPatientModal: PropTypes.func,
  hospitalChatBot: PropTypes.func,
  hospitalChatBotClose: PropTypes.func,
};

export default ChatBot;

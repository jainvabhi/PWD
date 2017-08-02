import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Async from 'react-code-splitting';
import ChatBot from './Chatbot';

import {
  getPatient,
  getPhiDetail,
  showPatientModal,
  hospitalChatBot,
  hospitalChatBotClose,
} from '../actions/BlockChain';

const Home = () => <Async load={import('./Home')} />;
// const Login = () => <Async load={import('./Auth/Login')} />;
const Landing = () => <Async load={import('./LandingPage')} />;
// const ChatBot = () => <Async load={import('./ChatBot')} />;
const PatientModal = () => <Async load={import('./PatientModal')} />;

const App = ({
  user,
  getPatient,
  getPhiDetail,
  showPatientModal,
  hospitalChatBot,
  hospitalChatBotClose,
}) => {
  console.log(user);
  return (
    <div>
      {user.token
        ? <Route path="/dashboard" exact component={Home} />
        : <Redirect to="/" />}

      <Route exact path="/" component={Landing} />

      {user.token
        ? <ChatBot
            user={user}
            hospitalChatBotClose={hospitalChatBotClose}
            hospitalChatBot={hospitalChatBot}
            showPatientModal={showPatientModal}
            getPhiDetail={e => getPhiDetail(e)}
            getPatient={e => getPatient(e)}
          />
        : null}

      {user.token && user.showPatientModal ? <PatientModal /> : null}
    </div>
  );
};

App.propTypes = {
  user: PropTypes.shape({}).isRequired,
  getPatient: PropTypes.func.isRequired,
  getPhiDetail: PropTypes.func.isRequired,
  showPatientModal: PropTypes.func.isRequired,
  hidePatientModal: PropTypes.func.isRequired,
  hospitalChatBot: PropTypes.func.isRequired,
  hospitalChatBotClose: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ user: state.user });
export default withRouter(
  connect(mapStateToProps, {
    getPatient,
    getPhiDetail,
    showPatientModal,
    hospitalChatBot,
    hospitalChatBotClose,
  })(App),
);

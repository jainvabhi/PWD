require('./ServiceWorker');
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Async from 'react-code-splitting';

import Login from './Auth/Login';
import ChatBot from './Chatbot';
import PatientModal from './PatientModal';

import {
  getPatient,
  getPhiDetail,
  showPatientModal,
  hidePatientModal,
} from '../actions/BlockChain';

const Home = () => <Async load={import('./Home')} />;

const App = ({
  user,
  getPatient,
  getPhiDetail,
  showPatientModal,
  hidePatientModal,
}) =>
  <div>
    {user.token
      ? <Route path="/" component={Home} />
      : <Redirect to="/login" />}
    <Route path="/login" component={Login} />
    {user.token
      ? <ChatBot
          user={user}
          showPatientModal={showPatientModal}
          getPhiDetail={e => getPhiDetail(e)}
          getPatient={e => getPatient(e)}
        />
      : null}
    {user.token && user.showPatientModal
      ? <PatientModal user={user} hidePatientModal={hidePatientModal} />
      : null}
  </div>;

App.propTypes = {
  user: PropTypes.shape({}).isRequired,
  getPatient: PropTypes.func.isRequired,
  getPhiDetail: PropTypes.func.isRequired,
  showPatientModal: PropTypes.func.isRequired,
  hidePatientModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ user: state.user });
export default withRouter(
  connect(mapStateToProps, {
    getPatient,
    getPhiDetail,
    showPatientModal,
    hidePatientModal,
  })(App),
);

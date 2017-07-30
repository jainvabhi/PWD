require('./ServiceWorker');
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Async from 'react-code-splitting';

import Login from './Auth/Login';
import Signup from './Auth/Signup';
// import Bot from './Bot';
import ChatBot from './Chatbot';



// import Header from './Header';

const Home = () => <Async load={import('./Home')} />;

const App = ({ user }) => (
  <div>
    {user.token
      ? <Route path="/" component={Home} />
      : <Redirect to="/login" />}
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <ChatBot user={user} />
  </div>
);

App.propTypes = {
  user: PropTypes.shape({}).isRequired,
};

export default withRouter(connect(state => ({ user: state.user }))(App));

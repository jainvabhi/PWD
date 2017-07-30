import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Dashboard from './Dashboard';
import { logout } from '../actions';
import Webcam from '../actions/webcam';
// import { Message, Blue } from './Styled';

const Home = ({ user, logout }) => {
  const onLogout = () => {
    logout();
  };
  Webcam.reset();
  return (user.token ? <Dashboard user={user} logout={onLogout} /> : <Redirect to="/login" />);
};

Home.propTypes = {
  user: PropTypes.shape({}).isRequired,
  logout: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, { logout })(Home);

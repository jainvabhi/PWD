import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Async from 'react-code-splitting';
import Webcam from '../actions/webcam';

const Profile = () => <Async load={import('./Profile')} />;
const DashBoard = () => <Async load={import('./DashBoard')} />;

const Home = ({ user }) => {
  Webcam.reset();
  let component;
  if (user.token && user.phi) {
    component = <Profile />;
  } else {
    component = <DashBoard />;
  }
  return user.token ? component : <Redirect to="/" />;
};

Home.propTypes = {
  user: PropTypes.shape({}).isRequired,
};
const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(Home);

import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Webcam from '../actions/webcam';
import TimeTable from './TimeTable';
import BrandSvg from './BrandSvg';
import { logout } from '../actions';

const DashBoard = ({ user, logout }) => {
  Webcam.reset();
  const patientList = _.map(user.patient.patientList, (item, i) => {
    return (
      <button className="list-group-item list-group-item-action flex-row align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            {item.name}
          </h5>
          <small>
            {item.address}
          </small>
        </div>
        <div className="flex-row">
          <small>
            {item.city}
          </small>
          <p className="mb-1">
            {item.case}
          </p>
        </div>
      </button>
    );
  });
  return (
    <div className="landing-page dashboard">
      <section className="header">
        <h1 className="brand-logo">
          <span className="brand-icon">
            <BrandSvg />
          </span>
          <span className="brand-text">Patient One</span>
        </h1>
        <button onClick={logout} className="logout">
          Logout
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 471.2 471.2"
            xmlSpace="preserve"
          >
            <g>
              <path d="M227.619,444.2h-122.9c-33.4,0-60.5-27.2-60.5-60.5V87.5c0-33.4,27.2-60.5,60.5-60.5h124.9c7.5,0,13.5-6,13.5-13.5 s-6-13.5-13.5-13.5h-124.9c-48.3,0-87.5,39.3-87.5,87.5v296.2c0,48.3,39.3,87.5,87.5,87.5h122.9c7.5,0,13.5-6,13.5-13.5 S235.019,444.2,227.619,444.2z" />
              <path d="M450.019,226.1l-85.8-85.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l62.8,62.8h-273.9c-7.5,0-13.5,6-13.5,13.5 s6,13.5,13.5,13.5h273.9l-62.8,62.8c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8 C455.319,239.9,455.319,231.3,450.019,226.1z" />
            </g>
          </svg>
        </button>
      </section>
      <div className="content">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <div className="card card-dashboard">
              <div className="card-content">
                <div className="card-content-member">
                  <h4 className="m-t-0">
                    Welcome Dr. {user.webcam.name}
                  </h4>
                  <p className="m-0">
                    <i className="fa fa-map-marker" />
                    {user.webcam.detail}
                  </p>
                </div>
                <h3 className="patient-title">Patient List</h3>
                <div className="list-group">
                  {patientList}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <TimeTable />
          </div>
        </div>
      </div>
    </div>
  );
};

DashBoard.propTypes = {
  user: PropTypes.shape({}).isRequired,
  logout: PropTypes.func,
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, { logout })(DashBoard);

import React from 'react';
import PropTypes from 'prop-types';
import Async from 'react-code-splitting';

import Webcam from '../actions/webcam';
import { connect } from 'react-redux';
import BrandSvg from './BrandSvg';
import patientImage from '../assets/images/patientimage.jpg';

const BioGraphy = () => <Async load={import('./BioGraphy')} />;
const Timeline = () => <Async load={import('./Timeline')} />;
import { showBio, showTimeline, backToDashboard } from '../actions';

const Profile = ({
  user,
  backToDashboard,
  timeline,
  showBio,
  showTimeline,
}) => {
  Webcam.reset();
  const userImage = {
    backgroundImage: `url(${patientImage})`,
  };
  const showBios = () => {
    showBio();
  };
  const showTimelines = () => {
    console.log('as');
    showTimeline();
  };
  let tabContent = <Timeline />;
  let activeTimelineClass = 'not-active';
  let activeBioClass = 'active';

  if (timeline.timeline) {
    tabContent = <BioGraphy />;
    activeTimelineClass = 'active';
    activeBioClass = 'not-active';
  }

  return (
    <div className="landing-page dashboard">
      <section className="header">
        <h1 className="brand-logo">
          <span className="brand-icon">
            <BrandSvg />
          </span>
          <span className="brand-text">Patient One</span>
        </h1>
        <button onClick={backToDashboard} className="logout">
          Back
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
              <div className="card-header userHeader" style={userImage} />
              <div className="card-content">
                <div className="card-content-member">
                  <h4 className="m-t-0">
                    {user.patient.name}
                  </h4>
                  <div className="medical-service">
                    <span className="serviceName">Medical Service:</span>{' '}
                    <span>OP-Emergency Service</span>
                  </div>
                </div>
                <div className="patient-detail">
                  <ul>
                    <li>
                      <span>Gender:</span>
                      <span>Female</span>
                    </li>
                    <li>
                      <span>Age:</span>
                      <span>35 Y</span>
                    </li>
                    <li>
                      <span>Race:</span>
                      <span>R</span>
                    </li>
                    <li>
                      <span>SSN:</span>
                      <span>999-999-9999</span>
                    </li>
                    <li>
                      <span>MRN:</span>
                      <span>8200011</span>
                    </li>
                    <li>
                      <span>Address:</span>
                      <span>
                        1601, Willow Lawn Drive <br />Richmond, VA - 23230
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-9">
            <ul className="nav nav-tabs tab-nav-right" role="tablist">
              <li role="presentation">
                <button className={activeBioClass} onClick={showBios}>
                  Timeline
                </button>
              </li>
              <li role="presentation" className="">
                <button className={activeTimelineClass} onClick={showTimelines}>
                  Medical History
                </button>
              </li>
            </ul>
            <div className="tabContent">
              {tabContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({}).isRequired,
  timeline: PropTypes.shape({}).isRequired,
  showTimeline: PropTypes.func.isRequired,
  showBio: PropTypes.func.isRequired,
  backToDashboard: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  user: state.user,
  timeline: state.timeline,
});
export default connect(mapStateToProps, {
  showTimeline,
  showBio,
  backToDashboard,
})(Profile);

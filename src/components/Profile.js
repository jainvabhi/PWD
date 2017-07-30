import React from 'react';
import PropTypes from 'prop-types';
import Webcam from '../actions/webcam';
import BioGraphy from './BioGraphy';
import Timeline from './Timeline';
import { connect } from 'react-redux';

import { showBio, showTimeline } from '../actions';

const Profile = ({user, timeline, showBio, showTimeline}) => {
  Webcam.reset();
  const userImage = {
    backgroundImage: `url(${user.image})`,
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
    <div className="medical-portal dashboard">
      <div className="medical-portal-header">
        <div className="medical-logo">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve"  className="svgLogo">
            <g>
                <path className="svgWhite" d="M256,0c-69.139,0-125.388,56.249-125.388,125.388S186.861,250.775,256,250.775s125.388-56.249,125.388-125.388
                    S325.139,0,256,0z M256,219.429c-51.854,0-94.041-42.187-94.041-94.041S204.146,31.347,256,31.347s94.041,42.187,94.041,94.041
                    C350.041,177.242,307.854,219.429,256,219.429z"/>
            </g>
            <g>
                <path className="svgWhite" d="M256,282.122c-118.112,0-214.204,96.092-214.204,214.204V512h428.408v-15.673
                    C470.204,378.214,374.112,282.122,256,282.122z M73.808,480.653C81.785,387.136,160.452,313.469,256,313.469
                    s174.215,73.666,182.192,167.184H73.808z"/>
            </g>

            </svg>
          <h1>Welcome {user.name}</h1>
        </div>
      </div>
      <div className="content">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="card card-dashboard">
              <div className="card-header userHeader" style={userImage}></div>
              <div className="card-content">
                  <div className="card-content-member">
                      <h4 className="m-t-0">{user.name}</h4>
                      <p className="m-0"><i className="fa fa-map-marker"></i>{user.detail}</p>
                  </div>
                  <div className="card-content-languages">
                     
                      <div className="card-content-languages-group">
                          <div>
                              <h4>Occupation</h4>
                          </div>
                          <div>
                              <ul>
                                  <li>Front End Developer</li>
                              </ul>
                          </div>
                      </div>
                       <div className="card-content-languages-group">
                        <div>
                              <h4>Contacts</h4>
                          </div>
                          <div>
                              <ul>
                                  <li>abhishek_jain@syntelinc.com</li>
                                  <li>+123 456 789</li>
                              </ul>
                          </div>
                      </div>
                       <div className="card-content-languages-group">
                        <div>
                              <h4>Address</h4>
                          </div>
                          <div>
                              <ul>
                                  <li>85 street pimple saudagar pune</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8">
            <ul className="nav nav-tabs tab-nav-right" role="tablist">
                <li role="presentation">
                    <button className={activeBioClass} onClick={showBios}>Timeline</button>
                </li>
                <li role="presentation" className="">
                    <button className={activeTimelineClass} onClick={showTimelines}>Biography</button>
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
};
const mapStateToProps = state => ({ user: state.user.webcam, timeline: state.timeline });
export default connect(mapStateToProps, { showTimeline, showBio })(Profile);


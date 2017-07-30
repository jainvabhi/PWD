import React from 'react';
import PropTypes from 'prop-types';
import Webcam from '../actions/webcam';
import TimeTable from './TimeTable';

const Dashboard = ({user, logout}) => {
  Webcam.reset();
  const userImage = {
    backgroundImage: `url(${user.webcam.image})`,
  };
  return (
    <div className="medical-portal dashboard">
      <div className="medical-portal-header">
        <div className="medical-logo">
          <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 309.665 309.665" xmlSpace="preserve" className="svgLogo">
            <g xmlns="http://www.w3.org/2000/svg">
                <path className="svgWhite" d="M309.665,94.734c0,15.903-10.797,29.301-25.496,33.562v136.653      c0,22.342-18.374,40.521-40.976,40.521c-21.984,0-39.968-17.269-40.879-38.83h-0.065v-1.594c0-0.033-0.033-0.065-0.033-0.098      h0.033v-81.173c0-13.106-10.797-23.773-24.033-23.773c-13.171,0-23.87,10.537-24.001,23.513v81.335      c0,22.374-18.407,40.554-40.976,40.554c-21.919,0-39.838-17.106-40.879-38.537h-0.098v-1.919c0-0.033,0-0.065,0-0.098      l-0.033-96.035C31.708,164.589,0,130.604,0,89.4V36.196c0-4.618,3.805-8.39,8.488-8.39h20.423v-15.22      c0-4.618,3.805-8.39,8.488-8.39h21.952c4.683,0,8.455,3.772,8.455,8.39v45.139c0,4.651-3.772,8.39-8.455,8.39H37.399      c-4.683,0-8.488-3.74-8.488-8.39V44.586H16.943V89.4c0,34.798,28.619,63.091,63.774,63.091s63.774-28.293,63.774-63.091V44.586      h-13.106v13.138c0,4.651-3.805,8.39-8.488,8.39h-21.952c-4.683,0-8.455-3.74-8.455-8.39V12.586c0-4.618,3.772-8.39,8.455-8.39      h21.952c4.683,0,8.488,3.772,8.488,8.39v15.22h21.561c4.683,0,8.488,3.772,8.488,8.39V89.4      c0,41.204-31.708,75.189-72.229,79.416v96.132c0.033,13.073,10.797,23.675,24.033,23.675s24.001-10.667,24.001-23.773v-81.075      c0-0.098,0-0.163,0-0.26v-2.732h0.163c1.528-20.944,19.22-37.562,40.814-37.562c22.602,0,40.977,18.212,40.977,40.554v81.27      c0.065,13.073,10.797,23.675,24.001,23.675c13.269,0,24.033-10.667,24.033-23.773v-135.97      c-16.098-3.252-28.228-17.366-28.228-34.245c0-19.285,15.838-34.96,35.318-34.96C293.795,59.774,309.665,75.449,309.665,94.734z       M292.722,94.734c0-10.016-8.26-18.179-18.407-18.179s-18.374,8.163-18.374,18.179c0,10.049,8.228,18.179,18.374,18.179      C284.461,112.913,292.722,104.783,292.722,94.734z M114.442,49.334V20.976h-5.008v28.358H114.442z M50.863,49.334V20.976h-5.008      v28.358H50.863z"/>
                <path className="svgBlue" d="M274.315,76.555c10.147,0,18.407,8.163,18.407,18.179c0,10.049-8.26,18.179-18.407,18.179      s-18.374-8.13-18.374-18.179C255.941,84.717,264.168,76.555,274.315,76.555z M283.974,94.734c0-5.268-4.325-9.529-9.659-9.529      c-5.333,0-9.626,4.26-9.626,9.529s4.293,9.561,9.626,9.561S283.974,100.002,283.974,94.734z"/>
                <path className="svgWhite" d="M274.315,85.205c5.333,0,9.659,4.26,9.659,9.529s-4.325,9.561-9.659,9.561      c-5.333,0-9.626-4.293-9.626-9.561C264.689,89.465,268.981,85.205,274.315,85.205z"/>
                <rect x="109.433" y="20.976" className="svgBlue" width="5.008" height="28.358"/>
                <rect x="45.855" y="20.976" className="svgBlue" width="5.008" height="28.358"/>
              </g>
          </svg>
          <h1>Welcome Dr. {user.webcam.name}</h1>
        </div>
        <button onClick={logout} className="logout">
            Logout
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 471.2 471.2"  xmlSpace="preserve">
              <g>
                <path d="M227.619,444.2h-122.9c-33.4,0-60.5-27.2-60.5-60.5V87.5c0-33.4,27.2-60.5,60.5-60.5h124.9c7.5,0,13.5-6,13.5-13.5 s-6-13.5-13.5-13.5h-124.9c-48.3,0-87.5,39.3-87.5,87.5v296.2c0,48.3,39.3,87.5,87.5,87.5h122.9c7.5,0,13.5-6,13.5-13.5 S235.019,444.2,227.619,444.2z"/>
                <path d="M450.019,226.1l-85.8-85.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l62.8,62.8h-273.9c-7.5,0-13.5,6-13.5,13.5 s6,13.5,13.5,13.5h273.9l-62.8,62.8c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8 C455.319,239.9,455.319,231.3,450.019,226.1z"/>
              </g>
            </svg>
        </button>
      </div>
      <div className="content">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="card card-dashboard">
              <div className="card-header userHeader" style={userImage}></div>
              <div className="card-content">
                  <div className="card-content-member">
                      <h4 className="m-t-0">{user.webcam.name}</h4>
                      <p className="m-0"><i className="fa fa-map-marker"></i>{user.webcam.detail}</p>
                  </div>
                  <div className="card-content-summary">
                      <p>Specialties are Creative UI, HTML5, CSS3, Semantic Web, Responsive Layouts, Web Standards Compliance, Performance Optimization, Cross Device Troubleshooting.</p>
                  </div>
              </div>
              <div className="card-footer">
                  <div className="card-footer-stats">
                      <div>
                          <p>PROJECTS:</p><i className="fa fa-users"></i><span>241</span>
                      </div>
                      <div>
                          <p>MESSAGES:</p><i className="fa fa-coffee"></i><span>350</span>
                      </div>
                      <div>
                          <p>Last online</p><span className="stats-small">3 days ago</span>
                      </div>
                  </div>
                  <div className="card-footer-message">
                      <h4><i className="fa fa-comments"></i> Message me</h4>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="card normal">
              <div className="card-header">
                <h2>Recently Viewed Patients</h2>
              </div>
              <div className="card-content patient-list">
                <ul>
                  <li>David Caresoniwski</li>
                  <li>Deborah Smeerkat</li>
                  <li>Geregory Steinberg</li>
                  <li>Shantell Blakeson-Smith</li>
                  <li>Kanye Eastern</li>
                </ul>
              </div>
              <div className="card-footer">
                <div className="card-footer-message">
                    <h4><i className="fa fa-comments"></i> Look Up Patients </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="card normal">
              <div className="card-header">
                <h2>Recently Viewed Claims</h2>
              </div>
              <div className="card-content patient-list">
                <ul>
                  <li><div>ID# 113478512-03 - Caresoniwski</div> <span className="badge badge-success">Processing</span></li>
                  <li><div>ID# 178890231-01 - Smeerkat</div> <span className="badge badge-paid">Paid</span></li>
                  <li><div>ID# 100021537-00 - Steinberg</div> <span className="badge badge-danger">Denied</span></li>
                  <li><div>ID# 100006942-03 - Blakeson-Smith</div> <span className="badge badge-default">Adjusted</span></li>
                  <li><div>ID# 178890231-00 - Eastern</div> <span className="badge badge-success">Processing</span></li>
                </ul>
              </div>
              <div className="card-footer">
                <div className="card-footer-message">
                    <h4><i className="fa fa-comments"></i> Manage Claims </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TimeTable />
    </div>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

export default Dashboard;

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Async from 'react-code-splitting';

import Webcam from '../../actions/webcam';

import { uploadAzure, showCam, hideCam } from '../../actions';

const LoadingSvg = () => <Async load={import('./LoadingSvg')} />;
const Webcams = () => <Async load={import('./WebCam')} />;

const Login = ({ user, uploadAzure, showCam, hideCam }) => {
  const capture = () => {
    Webcam.snap(data_uri => {
      uploadAzure(data_uri);
      Webcam.reset();
    });
  };

  const openWebcam = () => {
    showCam();
  };

  const closeWebcam = () => {
    hideCam();
    Webcam.reset();
  };

  if (user.token) {
    Webcam.reset();
  }

  let camScreen;

  if (user.showCam) {
    camScreen = (
      <div className="modal fade show custom-modal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Click Authinticate to login your Patient Portal
              </h5>
              <button
                type="button"
                onClick={closeWebcam}
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {user.loading
                ? <div className="text-center">
                    <br />
                    <br />
                    <h2>Wait we are authenticate your face!</h2>
                    <br />
                    <br />
                    <h4>
                      <LoadingSvg />
                    </h4>
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                : <Webcams />}
            </div>
            <div className="modal-footer">
              <button className="btn" onClick={capture}>
                Authinticate
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="login-container">
      <h2 className="auth-title">
        <span>3 ways to authenticate your Patient One Portal</span>, pelase
        choose your authentications preferences.
      </h2>
      <div className="auth-ways">
        <ul className="list-inline">
          <li>
            <button className="btn auth-btn" onClick={openWebcam}>
              <div className="copy">
                Face<br />authentication
              </div>
              <div>
                <i className="fa fa-camera" />
              </div>
            </button>
          </li>
          <li>
            <button className="btn auth-btn">
              <div className="copy">
                Voice<br />authentication
              </div>
              <div>
                <i className="fa fa-microphone" />
              </div>
            </button>
          </li>
          <li>
            <button className="btn auth-btn">
              <div className="copy">
                Username/Password<br />authentication
              </div>
              <div>
                <i className="fa fa-key" />
              </div>
            </button>
          </li>
        </ul>
      </div>
      {camScreen}
    </section>
  );
};

Login.propTypes = {
  user: PropTypes.shape({}).isRequired,
  uploadAzure: PropTypes.func.isRequired,
  showCam: PropTypes.func.isRequired,
  hideCam: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, { uploadAzure, showCam, hideCam })(
  Login,
);

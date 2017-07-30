import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Webcam from '../../actions/webcam';
import Webcams from './WebCam';

import camIcon from '../../assets/images/camIcon.jpg';
import voiceIcon from '../../assets/images/voiceIcon.jpg';
import keyIcon from '../../assets/images/keyIcon.jpg';

import newsImage1 from '../../assets/images/news-img1.jpg';
import newsImage2 from '../../assets/images/news-img2.jpg';
import newsImage3 from '../../assets/images/news-img3.jpg';
import newsImage4 from '../../assets/images/news-img4.jpg';

import { getPhiDetail } from '../../actions/BlockChain';

import { login, uploadAzure, showCam, hideCam } from '../../actions';

import LoadingSvg from './LoadingSvg';

import Form from './Form';

const Login = ({ user, login, uploadAzure, showCam, hideCam, getPhiDetail }) => {
  // console.log(user);
  const handleSubmit = e => {
    e.preventDefault();
    const { email: { value: email }, password: { value: password } } = e.target;
    login({ email, password });
  };
  
  const capture  = () => {
    Webcam.snap( function(data_uri) {
      uploadAzure(data_uri);
      Webcam.reset();
    });
  };
  
  const openWebcam = () => {
    showCam();
  };

  const closeWebcam = () => {
    hideCam();
    getPhiDetail();
    Webcam.reset();
  };

  // console.log(user);

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
              <h5 className="modal-title">Click Authinticate to login your medical portal</h5>
              <button type="button" onClick={closeWebcam} className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {user.loading ? <div className="text-center"><br/><br/><h2>Wait we are authenticate your face!</h2><br/><br/><h4><LoadingSvg /></h4><br/><br/><br/><br/></div> : <Webcams/>}
            </div>
            <div className="modal-footer">
              <button className="btn" onClick={capture}>Capture photo</button>
            </div>
          </div>
        </div>
      </div>);
  }

  return (
    <div className="medical-portal">
    <div className="hide">  
      <button disabled className="js-push-btn mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
        Enable Push Messaging
      </button>
      <section className="subscription-details js-subscription-details is-invisible">
          <p>Once you've subscribed your user, you'd send their subscription to your
          server to store in a database so that when you want to send a message
          you can lookup the subscription and send a message to it.</p>
          <p>To simplify things for this code lab copy the following details
          into the <a href="https://web-push-codelab.appspot.com/">Push Companion
          Site</a> and it'll send a push message for you, using the application
          server keys on the site - so make sure they match.</p>
          <pre><code className="js-subscription-json"></code></pre>
      </section>
      </div>
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
          <h1>Medical Portal</h1>
        </div>
      </div>
      <section className="login-container">
        <div className="container">
          <h2 className="auth-title">Welcome to the Medical Portal, <br/><span>3 ways to authenticate your medical portal</span>, pelase choose your authentications preferences.</h2>
          <div className="auth-ways">
            <ul className="list-inline">
              <li>
                <button className="btn auth-btn" onClick={openWebcam}>
                  <div className="copy">Face<br/>authentication</div>
                  <div>
                    <img src={camIcon} alt="" />
                  </div>
                </button>
              </li>
              <li>
                <button className="btn auth-btn">
                  <div className="copy">Voice<br/>authentication</div>
                  <div>
                    <img src={voiceIcon} alt="" />
                  </div>
                </button>
              </li>
              <li>
                <button className="btn auth-btn">
                  <div className="copy">Username/Password<br/>authentication</div>
                  <div>
                    <img src={keyIcon} alt="" />
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="th-sectionspace th-haslayout th-pattrenone">
				<div className="container">
          <div className="row th-featuresandtime">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="th-sectionhead th-alignleft th-nopattren">
                <div className="th-sectiontitle">
                  <h2>We Give You <span>the Best</span></h2>
                </div>
                <div className="th-description">
                  <p>Just two good old boys never meaning no harm beats all you have ever saw been in trouble with the law since the day they was born so the most of day</p>
                </div>
              </div>
              <div className="th-features">
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <div className="th-feature">
                      <div className="th-featurehead">
                        <span className="th-featureicon"><i className="fa fa-medkit"></i></span>
                        <div className="th-featuretitle">
                          <h3><a href="#">Faster First Aid</a></h3>
                        </div>
                      </div>
                      <div className="th-description">
                        <p>What might be right for you may not be right for some so lets make the most of this day since we are together evryday <a href="#">Read More</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <div className="th-feature">
                      <div className="th-featurehead">
                        <span className="th-featureicon"><i className="fa fa-heartbeat"></i></span>
                        <div className="th-featuretitle">
                          <h3><a href="#">General Medicine</a></h3>
                        </div>
                      </div>
                      <div className="th-description">
                        <p>Make all our dreams come true for me and you and we know flipper lives in a world full of wonder flying  sea shore out there<a href="#">Read More</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <div className="th-feature">
                      <div className="th-featurehead">
                        <span className="th-featureicon"><i className="fa fa-flask"></i></span>
                        <div className="th-featuretitle">
                          <h3><a href="#">Medical Research</a></h3>
                        </div>
                      </div>
                      <div className="th-description">
                        <p>On your mark get set and go now got a dream and we just know now we are gonna make our dream come true to our destiny<a href="#">Read More</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <div className="th-feature">
                      <div className="th-featurehead">
                        <span className="th-featureicon"><i className="fa fa-hospital-o"></i></span>
                        <div className="th-featuretitle">
                          <h3><a href="#">Intensive Care</a></h3>
                        </div>
                      </div>
                      <div className="th-description">
                        <p>They were four men living all together yet they were all alone well we are moving on up to the east side to a apartment<a href="#">Read More</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3 col-xs-12">
              <div className="th-openingtime">
                <h3>Our Working Time</h3>
                <ul className="th-workingtime">
                  <li>
                    <span>Mon - Fri</span>
                    <span>08:00am - 10:00pm</span>
                  </li>
                  <li>
                    <span>Saturday</span>
                    <span>10:00am - 07:00pm</span>
                  </li>
                  <li>
                    <span>Sunday</span>
                    <span>Emergency Only</span>
                  </li>
                  <li>
                    <span>Ambulance</span>
                    <span>24/7 Service</span>
                  </li>
                  <li>
                    <span>Visitors</span>
                    <span>11:00am - 01:00pm</span>
                  </li>
                </ul>
                <h4>Discharge Time</h4>
                <ul className="th-workingtime">
                  <li>
                    <span>Mon - Fri</span>
                    <span>01:00pm - 02:00pm</span>
                  </li>
                  <li>
                    <span>Saturday</span>
                    <span>11:00am - 01:00pm</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
				</div>
      </section>

      <section className="latest-news">
        <div className="container">
          <h2 className="bordered light">Latest <span>News</span></h2>
						
						<div className="row">
							
							<div className="col-md-3">
								<article className="blog-item">
									<div className="blog-thumbnail">
									<img alt="" src={newsImage1}/>
                  <div className="blog-date">
                  <p className="day">29 FEB 2014</p></div>
									</div>
									<div className="blog-content">
									<h4 className="blog-title"><a href="#">Latest Blog Graphic Image Post</a></h4>
									<p className="blog-meta">By: <a href="#">admin</a> | Tags: <a href="#">Graphic</a>, <a href="#">illustration</a>, <a href="#">Logo</a></p>
									<p>Printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever scrambled...</p>
									<a href="#." className="btn btn-default btn-mini btn-rounded">READ MORE</a>
									</div>
                </article>
              </div>
              <div className="col-md-3">
								<article className="blog-item">
									<div className="blog-thumbnail">
									<img alt="" src={newsImage2}/>
									<div className="blog-date"><p className="day">29 FEB 2014</p></div>
									</div>
									<div className="blog-content">
									<h4 className="blog-title"><a href="#">Latest Blog Graphic Image Post</a></h4>
									<p className="blog-meta">By: <a href="#">admin</a> | Tags: <a href="#">Graphic</a>, <a href="#">illustration</a>, <a href="#">Logo</a></p>
									<p>Maecenas ornare, augue ut ultricies tristique, enim lectus pretium quam, quis bibendum metus tellus sed magna. Donec eu dolor [...]</p>
									<a href="#." className="btn btn-default btn-mini btn-rounded">READ MORE</a>
									</div>
								</article>	
							</div>
							
							<div className="col-md-3">
								<article className="blog-item">
									<div className="blog-thumbnail">
									<img alt="" src={newsImage3}/>
									<div className="blog-date"><p className="day">29 FEB 2014</p></div>
									</div>
									<div className="blog-content">
									<h4 className="blog-title"><a href="#">Latest Blog Graphic Image Post</a></h4>
									<p className="blog-meta">By: <a href="#">admin</a> | Tags: <a href="#">Graphic</a>, <a href="#">illustration</a>, <a href="#">Logo</a></p>
									<p>Printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever scrambled...</p>
									<a href="#." className="btn btn-default btn-mini btn-rounded">READ MORE</a>
									</div>
                </article>
              </div>
              <div className="col-md-3">
								<article className="blog-item">
									<div className="blog-thumbnail">
									<img alt="" src={newsImage4}/>
									<div className="blog-date"><p className="day">29 FEB 2014</p></div>
									</div>
									<div className="blog-content">
									<h4 className="blog-title"><a href="#">Latest Blog Graphic Image Post</a></h4>
									<p className="blog-meta">By: <a href="#">admin</a> | Tags: <a href="#">Graphic</a>, <a href="#">illustration</a>, <a href="#">Logo</a></p>
									<p>Printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever scrambled...</p>
									<a href="#." className="btn btn-default btn-mini btn-rounded">READ MORE</a>
									</div>
								</article>
							</div>
							
						</div>
        </div>
      </section>

      

      {camScreen}
      
      <div className="login-page">
        <Form onSubmit={handleSubmit} />
        {user.token && <Redirect to="/" />}
      </div>
    </div>
  );
};

Login.propTypes = {
  user: PropTypes.shape({}).isRequired,
  login: PropTypes.func.isRequired,
  uploadAzure: PropTypes.func.isRequired,
  showCam: PropTypes.func.isRequired,
  hideCam: PropTypes.func.isRequired,
  getPhiDetail: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, { login, uploadAzure, showCam, hideCam, getPhiDetail })(Login);

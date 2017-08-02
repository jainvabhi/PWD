import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import BrandSvg from './BrandSvg';
import Login from './Auth/Login';
import news1 from '../assets/images/news1.jpeg';
import news2 from '../assets/images/news2.jpg';
import news3 from '../assets/images/news3.jpg';
const LandingPage = ({ user }) => {
  return (
    <div className="landing-page">
      {user.token && <Redirect to="/dashboard" />}
      <section className="header">
        <h1 className="brand-logo">
          <span className="brand-icon">
            <BrandSvg />
          </span>
          <span className="brand-text">Patient One</span>
        </h1>
        <div className="banner-text">
          <h2>The Best Surgeons</h2>
          <span className="hr" />
          <h3>More than, 3300 physicians, scientists and researchers</h3>
        </div>
      </section>
      <section className="landing-authentication">
        <div className="container">
          <Login />
        </div>
      </section>
      <section className="landing-time">
        <div className="container">
          <div className="card-group">
            <div className="card">
              <div className="card-block">
                <div className="card-icon">
                  <i className="fa fa-clock-o" />
                </div>
                <h4 className="card-title">Working Time</h4>
                <ul>
                  <li>
                    <span>Monday-Friday</span>
                    <span>8:00 - 17:00</span>
                  </li>
                  <li>
                    <span>Saturday</span>
                    <span>9:30 - 17:30</span>
                  </li>
                  <li>
                    <span>Sunday</span>
                    <span>9:30 - 15:00</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-block">
                <div className="card-icon">
                  <i className="fa fa-calendar-o" />
                </div>
                <h4 className="card-title">Doctors Timetable</h4>
                <p className="card-text">
                  Claritas est etiam processus dynamicus, qui sequitur
                  mutationem consuetudium lectorum. Mirum est notare quam
                  littera gothica, quam nunc putamus parum claram, decima et
                  quinta decima.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-block">
                <div className="card-icon">
                  <i className="fa fa-ambulance" />
                </div>
                <h4 className="card-title">Emergency Cases</h4>
                <h5>1-800-700-6200</h5>
                <p className="card-text">
                  Aenean sollicitudin, lorem quis bibendum auctor…
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="program">
        <div className="container">
          <h2>Our Major Clinical Programs</h2>
          <div className="row">
            <div className="col-sm-3">
              <div className="box">
                <div className="program-desc">
                  <h3>Cardiothoracic Surgery</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="box">
                <div className="program-desc">
                  <h3>Arthroscopy Surgery</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="box">
                <div className="program-desc">
                  <h3>Cataract Surgery</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="box">
                <div className="program-desc">
                  <h3>Colon and Rectal Surgery</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="box">
                <div className="program-desc">
                  <h3>Head and Neck Surgery</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="box">
                <div className="program-desc">
                  <h3>Hand Surgery</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="box">
                <div className="program-desc">
                  <h3>Gynecological Surgery</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="box">
                <div className="program-desc">
                  <h3>Endocrine Surgery</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="container">
          <h2>Latest News</h2>
          <div className="row">
            <div className="col-sm-4">
              <div className="news-box">
                <div className="news-box-image">
                  <img src={news1} />
                </div>
                <div className="news-box-body">
                  <h4 className="news-title">
                    Man dies during penis enlargement surgery after injected fat
                    leaked into his veins and caused heart attack
                  </h4>
                  <div className="news-date">
                    <div className="date">AUGUST 1, 2017</div>
                    <div className="time">2:59PM</div>
                  </div>
                  <div className="news-copy">
                    <p>
                      A HEALTHY young man in Sweden has died during penis
                      enlargement surgery which involved injecting fat from his
                      stomach into his penis.
                    </p>
                    <p>
                      Fears are growing for the safety of the procedure after
                      the fluid injected into the perfectly healthy
                      30-year-old’s manhood to boost girth began leaking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="news-box">
                <div className="news-box-image">
                  <img src={news2} />
                </div>
                <div className="news-box-body">
                  <h4 className="news-title">
                    'Healthy' man, 30, suffers heart attack and dies after
                    undergoing surgery to make his penis bigger
                  </h4>
                  <div className="news-date">
                    <div className="date">AUGUST 1, 2017</div>
                    <div className="time">2:59PM</div>
                  </div>
                  <div className="news-copy">
                    <p>
                      A "healthy" young man suffered a heart attack and died
                      after undergoing surgery to make his penis bigger, it has
                      emerged.
                    </p>
                    <p>
                      The 30-year-old passed away within hours of the operation,
                      with his "sudden" death believed to be the first case of
                      its kind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="news-box">
                <div className="news-box-image">
                  <img src={news3} />
                </div>
                <div className="news-box-body">
                  <h4 className="news-title">
                    30-Year-Old Man Dies While Receiving a Penis Enlargement
                    Surgery
                  </h4>
                  <div className="news-date">
                    <div className="date">AUGUST 1, 2017</div>
                    <div className="time">2:59PM</div>
                  </div>
                  <div className="news-copy">
                    <p>
                      If you’ve ever considered getting a penis enlargement
                      surgery, you might want to read this story of an unnamed
                      30-year-old man in Stockholm, Sweden who reportedly died
                      on the operating room table while getting such a
                      procedure.
                    </p>
                    <p>
                      Fears are growing for the safety of the procedure after
                      the fluid injected into the perfectly healthy
                      30-year-old’s manhood to boost girth began leaking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

LandingPage.propTypes = {
  user: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(LandingPage);

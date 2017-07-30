import React from 'react';
// import PropTypes from 'prop-types';
import Webcam from '../../actions/webcam';

class Webcams extends React.Component {
  componentDidMount() {
    Webcam.set({
      width: 600,
      height: 400,
      image_format: 'jpeg',
      jpeg_quality: 90,
    });
    Webcam.attach( '#my_camera' );
  }
  render() {
    return (
      <div id="my_camera"></div>
    );
  }
}

export default Webcams;
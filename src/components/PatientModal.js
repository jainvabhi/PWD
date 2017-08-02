import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hidePatientModal } from '../actions/BlockChain';

const PatientModal = ({ user, hidePatientModal }) => {
  console.log(user);
  return (
    <div className="modal fade show custom-modal patientModal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Here is the Patient Detail:</h5>
            <button
              type="button"
              onClick={hidePatientModal}
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ul className="list-group">
              <li className="list-group-item">
                <span>Name:</span> <span>{user.patient.name}</span>
              </li>
              <li className="list-group-item">
                <span>Gender:</span> <span>Female</span>
              </li>
              <li className="list-group-item">
                <span>Age:</span> <span>35Y</span>
              </li>
              <li className="list-group-item">
                <span>Race:</span> <span>R</span>
              </li>
              <li className="list-group-item">
                <span>SSN:</span> <span>999-999-9999</span>
              </li>
              <li className="list-group-item">
                <span>Appointment Time:</span> <span>10:30 AM</span>
              </li>
              <li className="list-group-item">
                <span>Medical Department:</span> <span>Veterinary Clinic</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

PatientModal.propTypes = {
  user: PropTypes.shape({}).isRequired,
  hidePatientModal: PropTypes.func,
};
const mapStateToProps = state => ({
  user: state.user,
});
export default connect(mapStateToProps, { hidePatientModal })(PatientModal);

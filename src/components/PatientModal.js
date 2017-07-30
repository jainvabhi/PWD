import React from 'react';
import PropTypes from 'prop-types';

const PatientModal = ({ user, hidePatientModal }) => {
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
                <span>Blood Group:</span> <span>{user.patient.bloodGroup}</span>
              </li>
              <li className="list-group-item">
                <span>Email:</span> <span>testemail@testemail.com</span>
              </li>
              <li className="list-group-item">
                <span>Phone Number:</span> <span>921-212-1212</span>
              </li>
              <li className="list-group-item">
                <span>Date of Birth:</span> <span>July 20, 1984</span>
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

export default PatientModal;

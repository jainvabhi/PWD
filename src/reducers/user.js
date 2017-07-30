import { actionTypes as types } from '../constants'

const initialState = {
  token: '',
  showCam: false,
  webcam: '',
  webcamError: '',
  patient: '',
  loading: false,
  showPatientModal: false,
  phi: '',
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
    case types.USER_LOGOUT:
      return {
        ...state,
        loading: false,
        token: '',
        showCam: false,
        webcam: false,
        webcamError: false,
        patient: '',
        showPatientModal: false,
        phi: '',
      }
    case types.LOGIN_REQUEST:
      return { ...state, loading: false }
    case types.LOGIN_SUCCESS:
      return { ...state, token: action.data.token }
    case types.LOGIN_FAILURE:
      return { ...state, token: '' }

    case types.WEBCAM_REQUEST:
      return { ...state, loading: true }

    case types.WEBCAM_ERROR:
      return {
        ...state,
        webcamError: action.data,
        webcam: '',
        token: '',
        showCam: false,
        loading: false,
      }

    case types.WEBCAM_SUCCESS:
      return {
        ...state,
        webcam: action.data,
        webcamError: '',
        token: action.data.token,
        loading: false,
      }

    case types.SHOW_WEBCAM:
      return { ...state, showCam: true, loading: false }

    case types.HIDE_WEBCAM:
      return { ...state, showCam: false, loading: false }

    case types.GET_PATIENT:
      return { ...state, patient: action.data }
    case types.GET_PHI:
      return { ...state, phi: action.data, showPatientModal: false }

    case types.SHOW_PATIENT_MODAL:
      return { ...state, showPatientModal: true }
    case types.HIDE_PATIENT_MODAL:
      return { ...state, showPatientModal: false }
    default:
      return state
  }
}

export default user

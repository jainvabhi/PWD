import { actionTypes as types } from '../constants';

const initialState = {
  'token': '',
  'showCam': false,
  'webcam': '',
  'webcamError': '',
  'patient': '',
  'loading': false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case types.SIGNUP_SUCCESS:
  case types.USER_LOGOUT: 
    return {...state, loading: false, token: '', showCam: false, webcam: false, webcamError: false, patient: ''};
  case types.LOGIN_REQUEST:
    return { ...state, loading: false };
  case types.LOGIN_SUCCESS:
    return { ...state, token: action.data.token };
  case types.LOGIN_FAILURE:
    return {...state, token: ''};
  
  case types.WEBCAM_REQUEST:
    return {...state, loading: true };
  
  case types.WEBCAM_ERROR:
    return {...state, webcamError: action.data, webcam: '', token: '', showCam: false, loading: false};
  
  case types.WEBCAM_SUCCESS:
    return {...state, webcam: action.data, webcamError: '', token: action.data.token, loading: false };
  
  case types.SHOW_WEBCAM:
    return {...state, showCam: true, loading: false};
  
  case types.HIDE_WEBCAM:
    return {...state, showCam: false, loading: false};
 
  case types.GET_PATIENT:
    return {...state, patient: action.data };
  
  default:
    return state;
  }
};

export default user;

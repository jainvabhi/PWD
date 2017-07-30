import { actionTypes as types, urls } from '../constants';
import { post } from '../helpers';
import _ from 'lodash';
import axios from 'axios';

export const logout = () => dispatch => {
  dispatch({ type: types.USER_LOGOUT });
};

export const signup = ({ email, password }) => dispatch => {
  dispatch({ type: types.SIGNUP_REQUEST });
  post({
    url: urls.SIGNUP,
    body: { email, password },
    success: types.SIGNUP_SUCCESS,
    failure: types.SIGNUP_FAILURE,
    dispatch,
  });
};

export const login = ({ email, password }) => dispatch => {
  dispatch({ type: types.LOGIN_REQUEST });
  post({
    url: urls.LOGIN,
    body: { email, password },
    success: types.LOGIN_SUCCESS,
    failure: types.LOGIN_FAILURE,
    dispatch,
  });
};

export const loginWithToken = () => (dispatch, getState) => {
  const token = getState().user.token;
  
  if (!token) {
    dispatch({ type: types.LOGIN_REQUEST });
    return;
  }

  // dispatch({ type: types.LOGIN_REQUEST });
  // post({
  //   url: urls.LOGIN_WITH_TOKEN,
  //   body: { token },
  //   success: types.LOGIN_SUCCESS,
  //   failure: types.LOGIN_FAILURE,
  //   dispatch,
  // });
  axios.post('https://hackthonfunction.azurewebsites.net/api/PersonDetail?code=m8bz7hSfwXOyE3epgBnVEpDwFV5d8WwiQFoJ0Bhp14uRwKpEysbQWQ==', {'personId': token})
  .then(personResponse => {
    const data = {
      'person': personResponse.data,
      'token': personResponse.data.personId,
      'name': personResponse.data.name,
      'detail': personResponse.data.userData,
      'image': getState().user.webcam.image,
    };
    dispatch({ type: types.WEBCAM_SUCCESS, data});
  })
  .catch(personError => {
    console.log(personError);
    const data = personError;
    dispatch({ type: types.WEBCAM_ERROR, data});
  }); 
};


export const uploadAzure = (file) => dispatch => {
  dispatch({ type: types.WEBCAM_REQUEST });
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  let dataurl = _.split(file, ',');
  let fileData = {
    'imageURL': dataurl[1],
  };
  axios.post('//hackthonapp.azurewebsites.net/api/Upload/user/PostUserImage', JSON.stringify(fileData))
  .then(response => {
    let faceObj = {
      'url': response.data.Message,
    };
    axios.post('https://hackthonfunction.azurewebsites.net/api/HttpTriggerJS1?code=RfbEiaecqduava7lOVX0LNxPQrRVJjXIpoH8MB3J9iaI6wFm5IXQJg==', faceObj)
    .then(faceResponse => {
      let identifyObj = {    
        'personGroupId': 'customer',
        'faceIds': [faceResponse.data[0].faceId],
        'maxNumOfCandidatesReturned': 1,
        'confidenceThreshold': 0.5,
      };
      axios.post('https://hackthonfunction.azurewebsites.net/api/Identify?code=0a1w8ALPxSFPERpnQv4gCpz44IYV2duGQEXilq4/hymRWRePGnRdKQ==', identifyObj)
      .then(identifyResponse => {
        const personId = identifyResponse.data[0].candidates[0].personId;
        console.log(personId);
        let personObj = {
          personId,
        };
        if (personId) {
          axios.post('https://hackthonfunction.azurewebsites.net/api/PersonDetail?code=m8bz7hSfwXOyE3epgBnVEpDwFV5d8WwiQFoJ0Bhp14uRwKpEysbQWQ==', personObj)
          .then(personResponse => {
            const data = {
              'person': personResponse.data,
              'token': personResponse.data.personId,
              'name': personResponse.data.name,
              'detail': personResponse.data.userData,
              'image': response.data.Message,
            };
            dispatch({ type: types.WEBCAM_SUCCESS, data});
          })
          .catch(personError => {
            console.log(personError);
            const data = personError;
            dispatch({ type: types.WEBCAM_ERROR, data});
          }); 
        } else {
          const data = {
            error: 'Person Not found',
          };
          dispatch({ type: types.WEBCAM_ERROR, data});
        }
      })
      .catch(identifyError => {
        console.log(identifyError);
        const data = identifyError;
        dispatch({ type: types.WEBCAM_ERROR, data});
      }); 
    })
    .catch(faceError => {
      console.log(faceError);
      const data = faceError;
      dispatch({ type: types.WEBCAM_ERROR, data});
    });
  })
  .catch(error => {
    const data = error;
    dispatch({ type: types.WEBCAM_ERROR, data});
    console.log(error);
  });
};


export const showCam = () => dispatch => {
  dispatch({ type: types.SHOW_WEBCAM });
};

export const hideCam = () => dispatch => {
  dispatch({ type: types.HIDE_WEBCAM });
};



export const showBio = () => dispatch => {
  dispatch({ type: types.HIDE_TIMELINE });
};

export const showTimeline = () => dispatch => {
  dispatch({ type: types.SHOW_TIMELINE });
};


import { actionTypes as types, urls } from '../constants';
// import { post } from '../helpers';

export const login = () => dispatch => {
  const data = {
    token: 'afds',
  };
  dispatch({ type: types.LOGIN_SUCCESS, data });
};

export const loginWithToken = () => dispatch => {
  const data = {
    token: 'afds',
  };
  dispatch({ type: types.LOGIN_SUCCESS, data });
};

import { actionTypes as types } from '../constants';

const timeline = (state = {}, action) => {
  switch (action.type) {
  case types.SHOW_TIMELINE:
    return ({timeline: true});
  case types.HIDE_TIMELINE:
    return ({timeline: false });
  default:
    return state;
  }
};

export default timeline;

import { combineReducers } from 'redux';

import user from './user';
import timeline from './timeline';

const rootReducer = combineReducers({
  user,
  timeline,
});

export default rootReducer;

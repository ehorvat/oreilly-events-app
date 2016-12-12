import { combineReducers } from 'redux';
import * as scheduleReducer from './schedule'

export default combineReducers(Object.assign(
  scheduleReducer
));

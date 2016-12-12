import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const conferences = createReducer({}, {
  [types.SET_CONFERENCES](state, action) {
    return action.conferences;
  },
});

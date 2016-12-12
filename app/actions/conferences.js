import * as types from './types'
import API from '../lib/api'

export function fetchConferences() {
  return(dispatch, getState) => {
    return API.get('/eventprovider/public/content/report/conferences').then(resp => {
      dispatch(setConferences(resp.conferences));
    }).catch((ex) => {
      console.log(ex)
    });
  }
}

export function setConferences(conferences) {
  return {
    type: types.SET_CONFERENCES,
    conferences
  }
}

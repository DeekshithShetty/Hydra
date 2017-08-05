/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import auth from '../../utils/auth';

import {
  CURRENT_IS_AUTH,
  TOGGLE_SIDEBAR,
  SENDING_AUTH_REQUEST,
  AUTH_REQUEST_ERROR,
  CLEAR_AUTH_REQUEST_ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loggedIn: auth.loggedIn(),
  css: {
    sidebarDisplay: "block",
  },
  error: '',
  currentlySending: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_IS_AUTH:
      return state.set('loggedIn', action.newAuthState);
    case TOGGLE_SIDEBAR:
      return state
        .setIn(['css', 'sidebarDisplay'], action.sidebarDisplay);
    case SENDING_AUTH_REQUEST:
      return state.set('currentlySending', action.sending);
    case AUTH_REQUEST_ERROR:
      return state.set('error', action.error);
    case CLEAR_AUTH_REQUEST_ERROR:
      return state.set('error', '');    
    default:
      return state;
  }
}

export default appReducer;

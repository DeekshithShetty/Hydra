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
  SAVE_AUTH_TOKEN,
  TOGGLE_SIDEBAR,
  SENDING_AUTH_REQUEST,
  AUTH_REQUEST_ERROR,
  CLEAR_AUTH_REQUEST_ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  auth:{
    currentlySending: false,
    error: '',
    loggedIn: auth.loggedIn(),
    idToken: '',
  },
  css: {
    sidebarDisplay: "block",
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_IS_AUTH:
      return state.setIn(['auth', 'loggedIn'], action.newAuthState);
    case SAVE_AUTH_TOKEN:
      return state.setIn(['auth', 'idToken'], action.idToken);  
    case SENDING_AUTH_REQUEST:
      return state.setIn(['auth', 'currentlySending'], action.sending);
    case AUTH_REQUEST_ERROR:
      return state.setIn(['auth', 'error'], action.error);
    case CLEAR_AUTH_REQUEST_ERROR:
      return state.setIn(['auth', 'error'], '');

    case TOGGLE_SIDEBAR:{
      var newSidebarState = 
        (state.get('css').get('sidebarDisplay') === 'block') ? 'none' : 'block';
      return state.setIn(['css', 'sidebarDisplay'], newSidebarState);
    }
    default:
      return state;
  }
}

export default appReducer;

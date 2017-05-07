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

import auth from '../../utils/auth'

import {
  SET_AUTH,
  TOGGLE_SIDEBAR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loggedIn: auth.loggedIn(),
  css: {
    sidebarDisplay: "block",
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return state.set('loggedIn', action.newAuthState);
    case TOGGLE_SIDEBAR:
      return state
        .setIn(['css', 'sidebarDisplay'], action.sidebarDisplay);
    default:
      return state;
  }
}

export default appReducer;

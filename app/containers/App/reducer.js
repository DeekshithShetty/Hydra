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

import authHelper from '../../utils/authHelper';

import {
  CURRENT_IS_AUTH,
  SAVE_AUTH_TOKEN,
  SAVE_AUTH_USER,
  TOGGLE_SIDEBAR,
  SENDING_AUTH_REQUEST,
  AUTH_REQUEST_ERROR,
  CLEAR_AUTH_REQUEST_ERROR,
  SAVE_MS_AUTH_TOKEN,
  SAVE_MS_AUTH_USER,
  CLEAR_AUTH_STATE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  isLoggedIn: authHelper.isLoggedIn(),
  auth:{
    currentlySending: false,
    error: '',
    idToken: authHelper.getAuthIdToken(),
    user: {
      name: 'Red Skull',
    }
  },
  ms_auth: {
    idToken: authHelper.getMsIdToken(),
    user: {
      displayableId: authHelper.getMsSignedInUser().displayableId,
      identityProvider: authHelper.getMsSignedInUser().identityProvider,
      name: authHelper.getMsSignedInUser().name,
      userIdentifier: authHelper.getMsSignedInUser().userIdentifier,
    }
  },
  css: {
    sidebarDisplay: "block",
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_IS_AUTH:
      return state.set('isLoggedIn', action.newAuthState);

    case SAVE_AUTH_TOKEN:
      return state.setIn(['auth', 'idToken'], action.idToken);
    case SAVE_AUTH_USER:
      return state.setIn(['auth', 'user', 'name'], action.user.name);
      
    case SENDING_AUTH_REQUEST:
      return state.setIn(['auth', 'currentlySending'], action.sending);
    case AUTH_REQUEST_ERROR:
      return state.setIn(['auth', 'error'], action.error);
    case CLEAR_AUTH_REQUEST_ERROR:
      return state.setIn(['auth', 'error'], '');

    case SAVE_MS_AUTH_TOKEN:
      return state.setIn(['ms_auth', 'accessToken'], action.accessToken);
      
    case SAVE_MS_AUTH_USER:
      return state
        .setIn(['ms_auth', 'user', 'displayableId'], action.user.displayableId)
        .setIn(['ms_auth', 'user', 'identityProvider'], action.user.identityProvider)
        .setIn(['ms_auth', 'user', 'name'], action.user.name)
        .setIn(['ms_auth', 'user', 'userIdentifier'], action.user.userIdentifier);

    case CLEAR_AUTH_STATE:
      return state
      .setIn(['auth', 'idToken'], '')
      .setIn(['ms_auth', 'accessToken'], '')
      .setIn(['ms_auth', 'user', 'displayableId'],'')
      .setIn(['ms_auth', 'user', 'identityProvider'], '')
      .setIn(['ms_auth', 'user', 'name'], '')
      .setIn(['ms_auth', 'user', 'userIdentifier'], '');

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

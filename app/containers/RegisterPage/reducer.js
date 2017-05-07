/*
 * The reducer takes care of state changes in our app through actions
 */
import { fromJS } from 'immutable';

import {
  CHANGE_FORM,
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR
} from './constants';

// The initial application state
// The initial state of the App
const initialState = fromJS({
  formState: {
    username: '',
    password: ''
  },
  error: '',
  currentlySending: false,
});

// Takes care of changing the application state
function reducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return state
        .setIn(['formState', 'username'], action.newFormState.username)
        .setIn(['formState', 'password'], action.newFormState.password);
    case SENDING_REQUEST:
      return state.set('currentlySending', action.sending);
    case REQUEST_ERROR:
      return state.set('error', action.error);
    case CLEAR_ERROR:
      return state.set('error', '');
    default:
      return state
  }
}

export default reducer

/*
 * The reducer takes care of state changes in our app through actions
 */
import { fromJS } from 'immutable';

import {
  CHANGE_FORM,
} from './constants';

// The initial application state
// The initial state of the App
const initialState = fromJS({
  formState: {
    username: '',
    password: ''
  }
});

// Takes care of changing the application state
function reducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return state
        .setIn(['formState', 'username'], action.newFormState.username)
        .setIn(['formState', 'password'], action.newFormState.password);
    default:
      return state
  }
}

export default reducer

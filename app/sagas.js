import {fork} from 'redux-saga/effects';

import {
  loginFlow, 
  registerFlow, 
  logoutFlow,
  logingUsingMicrosoftFlow
} from 'containers/App/sagas';

// The root saga is what we actually send to Redux's middleware. In here we fork
// each saga so that they are all "active" and listening.
// Sagas are fired once at the start of an app and can be thought of as processes running
// in the background, watching actions dispatched to the store.
export default function * root () {
  yield fork(loginFlow)
  yield fork(logoutFlow)
  yield fork(registerFlow)
  yield fork(logingUsingMicrosoftFlow)
}
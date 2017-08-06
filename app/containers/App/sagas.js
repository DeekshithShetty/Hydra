// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

import {hashSync} from 'bcryptjs';
import genSalt from '../../utils/auth/salt';
import {browserHistory} from 'react-router';
import {take, call, put, fork, race} from 'redux-saga/effects';
import auth from '../../utils/auth';

import { 
  sendingAuthRequest,
  setAuthState,  
  authRequestError,
 } from './actions';

import { changeForm } from '../LoginPage/actions';

import {
  LOGIN_AUTH_REQUEST,
  REGISTER_AUTH_REQUEST,
  LOGOUT_AUTH_REQUEST,
} from './constants';

/**
 * Effect to handle authorization
 * @param  {string} username               The username of the user
 * @param  {string} password               The password of the user
 * @param  {object} options                Options
 * @param  {boolean} options.isRegistering Is this a register request?
 */
export function* authorize ({username, password, isRegistering}) {
  // We send an action that tells Redux we're sending a request
  yield put(sendingAuthRequest(true));

  // We then try to register or log in the user, depending on the request
  try {
    let salt = genSalt(username);
    let hash = hashSync(password, salt);
    let response;

    // For either log in or registering, we call the proper function in the `auth`
    // module, which is asynchronous. Because we're using generators, we can work
    // as if it's synchronous because we pause execution until the call is done
    // with `yield`!
    if (isRegistering) {
      response = yield call(auth.register, username, hash);
    } else {
      response = yield call(auth.login, username, hash);
    }
    return response;
  } catch (error) {
    // If we get an error we send Redux the appropiate action and return
    yield put(authRequestError(error.message));
    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put(sendingAuthRequest(false));
  }
}

/**
 * Log in saga
 */
export function* loginFlow () {
  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"
  while (true) {
    // And we're listening for `LOGIN_AUTH_REQUEST` actions and destructuring its payload
    let request = yield take(LOGIN_AUTH_REQUEST)
    let {username, password} = request.data

    // A `LOGOUT_AUTH_REQUEST` action may happen while the `authorize` effect is going on, which may
    // lead to a race condition. This is unlikely, but just in case, we call `race` which
    // returns the "winner", i.e. the one that finished first
    let winner = yield race({
      auth: call(authorize, {username, password, isRegistering: false}),
      logout: take(LOGOUT_AUTH_REQUEST)
    })

    // If `authorize` was the winner...
    if (winner.auth) {
      // ...we send Redux appropiate actions
      yield put(setAuthState(true)); // User is logged in (authorized)
      yield put(changeForm({username: '', password: ''})); // Clear form
      forwardTo('/dashboard'); // Go to dashboard page
      // If `logout` won...
    } else if (winner.logout) {
      // ...we send Redux appropiate action
      yield put(setAuthState(false)); // User is not logged in (not authorized)
      yield call(logout); // Call `logout` effect
      forwardTo('/login'); // Go to login page
    }
  }
}

/**
 * Register saga
 * Very similar to log in saga!
 */
export function* registerFlow () {
  while (true) {
    // We always listen to `REGISTER_AUTH_REQUEST` actions
    let request = yield take(REGISTER_AUTH_REQUEST);
    let {username, password} = request.data;

    // We call the `authorize` task with the data, telling it that we are registering a user
    // This returns `true` if the registering was successful, `false` if not
    let wasSuccessful = yield call(authorize, {username, password, isRegistering: true});

    // If we could register a user, we send the appropiate actions
    if (wasSuccessful) {
      yield put(setAuthState(true)); // User is logged in (authorized) after being registered
      yield put(changeForm({username: '', password: ''})); // Clear form
      forwardTo('/dashboard'); // Go to dashboard page
    }
  }
}

/**
 * Effect to handle logging out
 */
export function* logout () {
  // We tell Redux we're in the middle of a request
  yield put(sendingAuthRequest(true));

  // Similar to above, we try to log out by calling the `logout` function in the
  // `auth` module. If we get an error, we send an appropiate action. If we don't,
  // we return the response.
  try {
    let response = yield call(auth.logout);
    yield put(sendingAuthRequest(false));
    return response;
  } catch (error) {
    yield put(authRequestError(error.message));
  }
}

/**
 * Log out saga
 * This is basically the same as the `if (winner.logout)` of above, just written
 * as a saga that is always listening to `LOGOUT_AUTH_REQUEST` actions
 */
export function* logoutFlow () {
  while (true) {
    yield take(LOGOUT_AUTH_REQUEST);
    yield put(setAuthState(false));
    yield call(logout);
    forwardTo('/login');
  }
}

// Little helper function to abstract going to different pages
function forwardTo (location) {
  browserHistory.push(location);
}

import {
  SENDING_AUTH_REQUEST,
  LOGIN_AUTH_REQUEST,
  REGISTER_AUTH_REQUEST,
  LOGOUT_AUTH_REQUEST,
  AUTH_REQUEST_ERROR,
  CURRENT_IS_AUTH,
  TOGGLE_SIDEBAR,
  CLEAR_AUTH_REQUEST_ERROR,
} from './constants'

/**
 * Sets the `currentlySending` state, which displays a loading indicator during requests
 * @param  {boolean} sending True means we're sending a request, false means we're not
 */
export function sendingRequest (sending) {
  return {type: SENDING_AUTH_REQUEST, sending}
}

/**
 * Tells the app we want to log in a user
 * @param  {object} data          The data we're sending for log in
 * @param  {string} data.username The username of the user to log in
 * @param  {string} data.password The password of the user to log in
 */
export function loginRequest (data) {
  return {type: LOGIN_AUTH_REQUEST, data}
}

/**
 * Tells the app we want to register a user
 * @param  {object} data          The data we're sending for registration
 * @param  {string} data.username The username of the user to register
 * @param  {string} data.password The password of the user to register
 */
export function registerRequest (data) {
  return {type: REGISTER_AUTH_REQUEST, data}
}

/**
 * Sets the authentication state of the application
 * @param  {boolean} newAuthState True means a user is logged in, false means no user is logged in
 */
export function setAuthState (newAuthState) {
  return {type: CURRENT_IS_AUTH, newAuthState}
}

export function toggleSidebarDisplay (newDisplay) {
  return {type: TOGGLE_SIDEBAR, newDisplay}
}

/**
 * Tells the app we want to log out a user
 */
export function logout () {
  return {type: LOGOUT_AUTH_REQUEST}
}

/**
 * Sets the `error` state to the error received
 * @param  {object} error The error we got when trying to make the request
 */
export function requestError (error) {
  return {type: AUTH_REQUEST_ERROR, error}
}

/**
 * Sets the `error` state as empty
 */
export function clearError () {
  return {type: CLEAR_AUTH_REQUEST_ERROR}
}
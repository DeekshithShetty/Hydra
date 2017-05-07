import {
  SET_AUTH,
  TOGGLE_SIDEBAR,
} from './constants'

/**
 * Sets the authentication state of the application
 * @param  {boolean} newAuthState True means a user is logged in, false means no user is logged in
 */
export function setAuthState (newAuthState) {
  return {type: SET_AUTH, newAuthState}
}

export function toggleSidebarDisplay (newDisplay) {
  return {type: TOGGLE_SIDEBAR, newDisplay}
}
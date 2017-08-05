/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const TOGGLE_SIDEBAR = 'hydra/App/TOGGLE_SIDEBAR';
export const DEFAULT_LOCALE = 'en';

// Auth related constants
export const CURRENT_IS_AUTH = 'hydra/App/CURRENT_IS_AUTH';
export const SENDING_AUTH_REQUEST = 'hydra/App/SENDING_AUTH_REQUEST';
export const LOGIN_AUTH_REQUEST = 'hydra/App/LOGIN_AUTH_REQUEST';
export const REGISTER_AUTH_REQUEST = 'hydra/App/REGISTER_AUTH_REQUEST';
export const LOGOUT_AUTH_REQUEST = 'hydra/App/LOGOUT_AUTH_REQUEST';
export const AUTH_REQUEST_ERROR = 'hydra/App/AUTH_REQUEST_ERROR';
export const CLEAR_AUTH_REQUEST_ERROR = 'hydra/LoginPage/CLEAR_AUTH_REQUEST_ERROR';
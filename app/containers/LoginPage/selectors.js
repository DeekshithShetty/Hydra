/**
 * LoginPage selectors
 */

import { createSelector } from 'reselect';

const selectLogin = (state) => state.get('login');

const makeSelectFormState = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('formState').toJS()
);

const makeSelectCurrentlySending = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('currentlySending')
);

const makeSelectError = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('error')
);

const makeSelectLoggedIn = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('loggedIn')
);

export {
  selectLogin,
  makeSelectFormState,
  makeSelectCurrentlySending,
  makeSelectError,
  makeSelectLoggedIn
};

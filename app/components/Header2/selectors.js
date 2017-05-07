/**
 * Header selectors
 */

import { createSelector } from 'reselect';

const selectLogin = (state) => state.get('login');

const makeSelectLoggedIn = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('loggedIn')
);

export {
  selectLogin,
  makeSelectLoggedIn,
};

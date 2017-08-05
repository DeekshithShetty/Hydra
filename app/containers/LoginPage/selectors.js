/**
 * LoginPage selectors
 */

import { createSelector } from 'reselect';

const selectLogin = (state) => state.get('login');

const makeSelectFormState = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('formState').toJS()
);

export {
  selectLogin,
  makeSelectFormState,
};

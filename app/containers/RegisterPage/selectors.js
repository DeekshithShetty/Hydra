/**
 * RegisterPage selectors
 */

import { createSelector } from 'reselect';

const selectRegister = (state) => state.get('register');

const makeSelectFormState = () => createSelector(
  selectRegister,
  (registerState) => registerState.get('formState').toJS()
);

export {
  selectRegister,
  makeSelectFormState,
};

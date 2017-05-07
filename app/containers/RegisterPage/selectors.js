/**
 * RegisterPage selectors
 */

import { createSelector } from 'reselect';

const selectRegister = (state) => state.get('register');

const makeSelectFormState = () => createSelector(
  selectRegister,
  (registerState) => registerState.get('formState').toJS()
);

const makeSelectCurrentlySending = () => createSelector(
  selectRegister,
  (registerState) => registerState.get('currentlySending')
);

const makeSelectError = () => createSelector(
  selectRegister,
  (registerState) => registerState.get('error')
);

export {
  selectRegister,
  makeSelectFormState,
  makeSelectCurrentlySending,
  makeSelectError
};

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectCssSidebarDisplay = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('css').get('sidebarDisplay')
);

export {
  selectGlobal,
  makeSelectCssSidebarDisplay,
};

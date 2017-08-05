import { createSelector } from 'reselect';

const selectDashboard = (state) => state.get('dashboard');

const makeSelectLoading = () => createSelector(
  selectDashboard,
  (dashboardState) => dashboardState.get('loading')
);

const makeSelectError = () => createSelector(
  selectDashboard,
  (dashboardState) => dashboardState.get('error')
);

const makeSelectRepos = () => createSelector(
  selectDashboard,
  (dashboardState) => dashboardState.getIn(['userData', 'repositories'])
);

export {
  selectDashboard,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
};

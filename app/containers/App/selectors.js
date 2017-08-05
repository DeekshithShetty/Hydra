import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectAuth = () => createSelector(
  selectGlobal,
  (globalState) => { 
    console.dir("globalState.get('auth').toJS()");
    console.dir(globalState.get('auth'));
    return globalState.get('auth').toJS();
  }
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const makeSelectCss = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('css').toJS()
);

const makeSelectCurrentlySendingAuthRequest = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('auth').get('currentlySending')
);

const makeSelectAuthRequestError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('auth').get('error')
);

const makeSelectAuthIsLoggedIn = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('auth').get('loggedIn')
);

export {
  selectGlobal,
  makeSelectLocationState,
  makeSelectCss,
  selectAuth,
  makeSelectCurrentlySendingAuthRequest,
  makeSelectAuthRequestError,
  makeSelectAuthIsLoggedIn,
};

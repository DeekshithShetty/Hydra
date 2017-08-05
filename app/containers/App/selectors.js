import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

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
  (globalState) => { 
    console.dir("css state from selector");
    console.dir(globalState.get('css'));
    return { 'css' : true };
    //return globalState.get('css').toJS();
  }
);

const makeSelectCurrentlySending = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentlySending')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectLoggedIn = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loggedIn')
);

export {
  selectGlobal,
  makeSelectLocationState,
  makeSelectCss,
  makeSelectCurrentlySending,
  makeSelectError,
  makeSelectLoggedIn,
};

// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business

import React from 'react'
import { Route } from 'react-router';

import { getAsyncInjectors } from './utils/asyncInjectors';

import { clearAuthRequestError } from './containers/App/actions'

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export const createRoutes = (store) => {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  function checkAuth(nextState, replaceState) {

        let isLoggedIn = store.getState()
            .get('global')
            .get('isLoggedIn'); 

        store.dispatch(clearAuthRequestError())
        
        if (nextState.location.pathname == '/login') {
            if (isLoggedIn) {
                replaceState('/dashboard');
            }
        } else if (nextState.location.pathname == '/register') {
            if (isLoggedIn) {
                replaceState('/dashboard');
            }
        } else {
            if (!isLoggedIn) {
                replaceState('/login');
            }
        }
    }

  return [
      {
        path: '/login',
        name: 'login',
        onEnter: checkAuth,
        getComponent(nextState, cb) {
            const importModules = Promise.all([
                import('./containers/LoginPage/reducer'),
                import('./containers/LoginPage')
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, component]) => {
                injectReducer('login', reducer.default);
                renderRoute(component);
            });
            importModules.catch(errorLoading);
        },
    }, {
        path: '/register',
        name: 'register',
        onEnter: checkAuth,
        getComponent(nextState, cb) {
            const importModules = Promise.all([
                import('./containers/RegisterPage/reducer'),
                import('./containers/RegisterPage')
            ]);
            
            const renderRoute = loadModule(cb);

            importModules.then(([reducer, component]) => {
                injectReducer('register', reducer.default);
                renderRoute(component);
            });
            importModules.catch(errorLoading);
        },
    }, {
        onEnter: checkAuth,
        getComponent(nextState, cb) {
            import('./containers/App')
                .then(loadModule(cb))
                .catch(errorLoading);
        },
        childRoutes: [
            {
                path: '/dashboard',
                getComponent(nextState, cb) {
                    const importModules = Promise.all([
                        import('./containers/DashboardPage/reducer'),
                        import('./containers/DashboardPage/sagas'),
                        import('./containers/DashboardPage')
                    ]);

                    const renderRoute = loadModule(cb);

                    importModules.then(([reducer, sagas, component]) => {
                        injectReducer('dashboard', reducer.default);
                        injectSagas(sagas.default);
                        renderRoute(component);
                    });
                    importModules.catch(errorLoading);
                }
            }
        ],
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('./containers/NotFoundPage')
            .then(loadModule(cb))
            .catch(errorLoading);
      },
    },
  ];  
}

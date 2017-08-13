import {getAccessToken} from './microsoft-auth';

let  sessionStorage = global.window.sessionStorage;

let authHelper = {
    isLoggedIn () {
        return !!sessionStorage['auth.idtoken'] || !!sessionStorage['msal.idtoken'];
    },
    getAuthIdToken(){
        return localStorage.token ? localStorage.token : false;
    },
    getMsIdToken(){
        if(sessionStorage['msal.idtoken']){
            return sessionStorage['msal.idtoken'];
        }
        return false;
    },
    getMsSignedInUser(){
        if(sessionStorage['msal.signedinuser']){
            return JSON.parse(sessionStorage['msal.signedinuser']);
        }
        return {
            displayableId: '',
            identityProvider: '',
            name: '',
            userIdentifier: '',
          };
    }
}

export default authHelper;
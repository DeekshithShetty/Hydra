import {getAccessToken} from './microsoft-auth';

let localStorage = global.window.localStorage;
let  sessionStorage = global.window.sessionStorage;

let authHelper = {
    isLoggedIn () {
        return !!localStorage.token || !!sessionStorage['msal.accesstoken'];
    },
    getIdToken(){
        return localStorage.token ? localStorage.token : false;
    },
    getMsAccessToken(){
        if(sessionStorage['msal.accesstoken']){
            return sessionStorage['msal.accesstoken'];
            /*
            return getAuthToken().then(function(accessToken){
                console.log("in getAuthToken");
                return accessToken;
            });
            */
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
import Msal from "exports-loader?Msal!../../../node_modules/msal/out/msal.js";

import config from './config';

let userAgentApplication;

(function init(){
    if(userAgentApplication === undefined){
        userAgentApplication = new Msal.UserAgentApplication(
            config.clientId, 
            null, 
             // this callback is called after loginRedirect OR acquireTokenRedirect 
             // (not used for loginPopup/aquireTokenPopup)
            function (errorDes, token, error, tokenType) { 
            });
    }
})();

function throwError(response) {
    const error = new Error("Error while authenicating");
    error.response = response;
    throw error;
}

export function startOAuth(){
    return userAgentApplication.loginPopup(["user.read"]).then( function(idToken) {
        // signin successful
        return;
    }, function (error) {
        // handle error
        console.dir("In startOAuth error");
        throwError(error);
    });
}

export function getMsAccessToken(){
    // get an access token
    return userAgentApplication.acquireTokenSilent(["user.read"]).then(function (accessToken) {
        console.log("ATS promise resolved");
        sessionStorage['msal.accesstoken'] = accessToken;
        return accessToken;
    }, function (error) {
        // interaction required 
        if(error.indexOf("interaction_required") != -1){
            userAgentApplication.acquireTokenPopup(["user.read"]).then(function (accessToken) {
                // success
                sessionStorage['msal.accesstoken'] = accessToken;
                return accessToken;
        }, function (error) {
                // error
                throwError(error);
            });
        }
    });
}

export function getSignedInUser(){
    let signedInUser = userAgentApplication.getUser();
    sessionStorage['msal.signedinuser'] = JSON.stringify(signedInUser);
    return signedInUser;
}

/*
export function startOAuth(){
    return userAgentApplication.loginPopup(["user.read"]).then( function(token) {
        // signin successful

        var user = userAgentApplication.getUser();
    
        getAuthToken().then(function(access_token){
            user.access_token = access_token;
        });
        
        return user;
    }, function (error) {
        // handle error
        throwError(error);
    });
}
*/

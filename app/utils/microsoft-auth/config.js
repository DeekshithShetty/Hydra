const config = {
    oauthUrl : "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
    clientId: '',
    redirectUri: 'http://localhost:3000/dashboard',
    scopes: ["user.read"],
    responseType: "token",
};

export default config;
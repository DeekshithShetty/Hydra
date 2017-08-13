const config = {
    oauthUrl : "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
    clientId: '192177a3-a9b9-4f56-b394-9ad7e13b0828',
    redirectUri: 'http://localhost:3000/dashboard',
    scopes: ["user.read"],
    responseType: "token",
};

export default config;
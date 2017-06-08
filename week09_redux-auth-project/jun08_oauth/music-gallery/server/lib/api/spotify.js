/* eslint no-console: off */
const Spotify = require('spotify-web-api-node');
const { CLIENT_ID, CLIENT_SECRET } = process.env;
if(!CLIENT_ID || !CLIENT_SECRET) console.log('No Spotify CLIENT_ID or CLIENT_SECRET found');

const spotifyApi = new Spotify({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    redirectUri: 'http://localhost:3000/api/auth/spotify/callback'
});

spotifyApi.getClient = (accessToken, refreshToken) => {
    return new Spotify({
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,  
        accessToken,
        refreshToken
    });
};

module.exports = spotifyApi;
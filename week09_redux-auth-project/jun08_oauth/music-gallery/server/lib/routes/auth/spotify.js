const Router = require('express').Router;
const router = Router();
// const bodyParser = require('body-parser').json();
const spotifyApi = require('../../api/spotify');
const readAuth = require('../../auth/read-auth')();
const cookieParser = require('cookie-parser')();
const tokenService = require('../../auth/token-service');
const User = require('../../models/user');

/**
 * Based on: https://github.com/kauffecup/spotify-react-router-auth
 */

const STATE_KEY = 'spotify_auth_state';
const USER_ID_KEY = 'user_id_key';
const ORIGIN_KEY = 'origin_key';

// your application requests authorization
const scopes = ['user-read-private', 'user-read-email'];

/** Generates a random string containing numbers and letters of N characters */
const generateRandomString = N => (Math.random().toString(36)+Array(N).join('0')).slice(2, N+2);

router
    /**
     * The /login endpoint
     * Redirect the client to the spotify authorize url, but first set that user's
     * state in the cookie.
     */
    .get('/login', cookieParser, readAuth, (req, res) => {
        const state = generateRandomString(16);
        res.cookie(STATE_KEY, state);
        if(req.user) res.cookie(USER_ID_KEY, req.user.id);
        if(req.query.origin) res.cookie(ORIGIN_KEY, req.query.origin);
        res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
    })

    /**
     * The /callback endpoint - hit after the user logs in to spotifyApi
     * Verify that the state we put in the cookie matches the state in the query
     * parameter. Then, if all is good, redirect the user to the user page. If all
     * is not good, redirect the user to an error page
     */
    .get('/callback', cookieParser, (req, res) => {
        const { code, state } = req.query;
        const storedState = req.cookies ? req.cookies[STATE_KEY] : null;
        // first do state validation
        if (state === null || state !== storedState) {
            return res.redirect('/error?err=invalid-state');
        }

        // if the state is valid, get the authorization code and pass it on to the client
        res.clearCookie(STATE_KEY);
        const userId = req.cookies[USER_ID_KEY];
        const origin = req.cookies[ORIGIN_KEY];
    
        // Retrieve an access token and a refresh token
        spotifyApi.authorizationCodeGrant(code)
            .then(data => {
                const { /*expires_in,*/ access_token, refresh_token } = data.body;
                // create a client specific to this user
                const client = spotifyApi.getClient(access_token, refresh_token);
                return Promise.all([client.getMe(), { access_token, refresh_token }]);
            }).then(([{ body }, tokens]) => {
                body.tokens = tokens;
                const userPromise = userId ? User.findById(userId) : User.findOne({ 'spotify.id': body.id });
                return Promise.all([userPromise, body]);
            })
            .then(([user, spotifyUser]) => {
                if(user) {
                    if(user.spotify) return user;
                    user.spotify = spotifyUser;
                    return user.save();
                }
                else {
                    return new User({
                        name: spotifyUser.display_name,
                        email: spotifyUser.email,
                        spotify: spotifyUser
                    }).save();
                }
            })
            .then(user => tokenService.sign(user))
            .then(token => res.redirect(`${origin || '/'}?token=${token}`))
            .catch(err => {
                res.redirect(`/error?err=${err.message}`);
            });
        
    });

module.exports = router;
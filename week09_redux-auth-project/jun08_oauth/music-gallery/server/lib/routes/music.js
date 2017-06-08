const express = require('express');
const router = express.Router();
const User = require('../models/user');
const spotifyApi = require('../api/spotify');

router
    .get('/', (req, res, next) => {
        User.findById(req.user.id)
          .select('spotify.tokens')
          .lean()
          .then(({ spotify }) => {
              if(!spotify) throw { code: 400, error: 'no linked spotify'};
              const { access_token, refresh_token } = spotify.tokens;
              const client = spotifyApi.getClient(access_token, refresh_token);
              return client.searchPlaylists('401');
          })
          .then(data => res.send(data.body.playlists))
          .catch(next);
    });

module.exports = router;
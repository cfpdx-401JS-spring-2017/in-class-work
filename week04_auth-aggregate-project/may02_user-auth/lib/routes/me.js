const Router = require('express').Router;
const router = Router();
const User = require('../models/user');

router
    .get('/favorites', (req, res, next) => {
        User.findById(req.user._id)
            .select('favorites')
            .populate('favorites')
            .then(user => {
                res.send(user.favorites);
            })
            .catch(next);
    })
    
    .post('/favorites', (req, res, next) => {
        
    })

    .delete('/favorites/:id', (req, res, next) => {
        
    });

module.exports = router;
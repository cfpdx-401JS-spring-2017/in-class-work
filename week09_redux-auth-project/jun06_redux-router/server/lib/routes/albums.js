const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Album = require('../models/album');

router
    .get('/', (req, res, next) => {
        Album.find(req.query)
            .select('name')
            .lean()
            .then(albums => res.send(albums))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        const id = req.params.id;

        Album.findById(id)
            .lean()
            .then(album => {
                if(!album) throw { 
                    code: 404, 
                    error: `album ${id} does not exist`
                };
                res.send(album);
            })
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        const album = req.params.id;

        Album.findByIdAndRemove(album)
        .then(response => res.send({ removed: !!response }))
        .catch(next);
    })

    .post('/', bodyParser, (req, res, next) => {
        new Album(req.body).save()
            .then(saved => res.send(saved))
            .catch(next);
    })

    .put('/:id', bodyParser, (req, res, next) => {
        Album.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
            .then(saved => res.send(saved))
            .catch(next);
    })


    .post('/:id/images', bodyParser, (req, res, next) => {
        const { body, params } = req;
        const { id } = params;
        Album.findByIdAndUpdate(id, {
            $push: { images: body }
        }, {
            new: true,
            runValidators: true
        })
        .then(({ images }) => res.send(images[images.length - 1]))
        .catch(next);
    })
    
    .delete('/:id/images/:imageId', (req, res, next) => {
        const { id, imageId } = req.params;
        Album.findByIdAndUpdate(id, {
            $pull: { images: { _id: imageId } }
        }, {
            new: true,
            runValidators: true
        })
        .then(({ images }) => res.send({ imageCount: images.length }))
        .catch(next);
    });

module.exports = router;
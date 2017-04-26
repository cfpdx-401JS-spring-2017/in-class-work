const Router = require('express').Router;
const router = Router();

router
    .get('/', (req, res) => {
        res.send([{ pet: true }]);
    })

    .post('/', (req, res) => {
        res.send({ post: 'pets' });
    });


module.exports = router;
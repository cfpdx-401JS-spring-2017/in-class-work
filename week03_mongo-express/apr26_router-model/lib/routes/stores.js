const Router = require('express').Router;
const router = Router();

router
    .get('/', (req, res) => {
        res.send([{ store: true }]);
    })

    .post('/', (req, res) => {
        res.send({ post: 'store' });
    });


module.exports = router;
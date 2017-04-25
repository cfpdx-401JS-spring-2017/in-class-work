const fs = require('fs');
const path = require('path');

const superCat = JSON.stringify({
    name: 'super cat',
    type: 'top secret'
});

const catHtml = path.join(__dirname, 'cat.html');

function app(req, res) {
    if (req.url === '/cat') {
        res.setHeader('Content-Type', 'application/json');
        res.end(superCat);
    }
    else {
        fs.createReadStream(catHtml).pipe(res);
    }
}

module.exports = app;


require('../lib/connect');
const Unicorn = require('../lib/models/unicorn');

const unicorn = new Unicorn({
    name: 'spicey',
    color: 'gold',
    catchPhrases: ['hay pizza', 'go gettum']
});

unicorn.save()
    .then(savedUnicorn => {
        console.log(savedUnicorn);
    })
    .catch(err => {
        console.log(err);
    });
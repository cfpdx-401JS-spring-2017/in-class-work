require('./lib/connect');
const Unicorn = require('./lib/models/unicorn');

const unicorn = new Unicorn({
    name: 'hornwold'
});

unicorn.save()
    .then(savedUnicorn => {
        console.log(savedUnicorn);
    });
require('../lib/connect');
const Unicorn = require('../lib/models/unicorn');

Unicorn.find().then(unicorns => {
    console.log(unicorns);
});

Unicorn.findOne().then(unicorn => {
    console.log(unicorn);
});

Unicorn.findById('58ff9ae813dc7b45058c2f57').then(unicorn => {
    console.log(unicorn);
});

const copyDir = require('crappy-copy-dir');

copyDir('./data', './copied', () => {
    console.log('directory copied, thx!');
});
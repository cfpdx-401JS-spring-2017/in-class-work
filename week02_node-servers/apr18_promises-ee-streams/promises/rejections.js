



function asyncFn(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name === 'marty') reject('cannot be marty');
            else resolve(name);
        });
    });
}

asyncFn('marty')
    .then(name => {
        console.log('success!', name);
        return name.length;
    })
    .then(length => {
        if (length === 3) {
            throw 'length should not be 3';
        }
        return length * 2;
    })
    .catch(err => {
        return 12;
    })
    .then(value => {
        console.log('final value', value);
    });
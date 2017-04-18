



function asyncFn(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name === 'marty') reject('cannot be marty');
            else resolve(name);
        });
    });
}

asyncFn('ivy')
    .then(
        name => {
            console.log('success!', name);
        },
        err => { 
            console.log('fail!', err);
        }    
    )
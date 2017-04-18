



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
        null,
        err => { 
            console.log('fail!', err);
        }    
    )


function takeFive(cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello');
        }, 5000);
    })
}

takeFive().then((result) => {
    console.log('5 seconds has gone by', result);
})
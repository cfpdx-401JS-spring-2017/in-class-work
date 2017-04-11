
for(var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, i*10);
}




// PART 2

// function makeClosure(n) {
//     return function() {
//         console.log(n);
//     }
// }
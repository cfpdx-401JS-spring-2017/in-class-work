
const obj = {
    name: 'David',
    sayHello() {
        return `Hello ${this.name}`;
    }
}

function doHello(fn) {
    console.log('doHello:', fn());
}

// "Call site" is what determines "this"
// === Where the parenthesis are.
console.log(obj.sayHello());

doHello(obj.sayHello);

const sayHello = obj.sayHello;
// this next line is where the call site is:
console.log(sayHello());

const obj2 = { name: 'Morgan' };
obj2.sayHello = sayHello;
// if the call site has something to the left of
// the dot "." _that_ is the thing that will be used
// as "this"
console.log(obj2.sayHello());

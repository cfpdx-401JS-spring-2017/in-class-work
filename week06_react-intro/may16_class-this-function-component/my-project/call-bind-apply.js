function sayHello(greeting, emphasis) {
    return `${greeting} ${this.name}${emphasis}`;
}

const david = { name: 'David' };

console.log(sayHello.call(david, 'Hello', '!'));
console.log(sayHello.apply(david, ['Hello', '!']));

const helloDavid = sayHello.bind(david);
console.log('same function?', helloDavid === sayHello);
console.log(helloDavid('Hello', '!'));

console.log(helloDavid.call({ name: 'Morgan' }, 'Hello', '!'));

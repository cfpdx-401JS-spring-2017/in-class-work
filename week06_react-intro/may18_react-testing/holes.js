// 1) objects can have "undefined" properties
// 2) but also can have defined properties that have a value of "undefined"
// 3) so, use hasOwnProperty to see if prop is defined
const obj = { foo: 'FOO', qux: undefined };

console.log(obj);
console.log(Object.keys(obj));
console.log('bar', obj.bar, obj.hasOwnProperty('bar'));
console.log('qux', obj.qux, obj.hasOwnProperty('qux'));

// use .hasOwnProperty unless you really really really need to
// look at whole prototype chain
console.log(obj.hasOwnProperty('toString'), 'toString' in obj);

// Arrays are objects with a special length property
const arr = [1, 2, 3];
console.log(Object.keys(arr));

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    return `Hello ${this.name}`;
}

const person = new Person('David');

console.log(person.sayHello());

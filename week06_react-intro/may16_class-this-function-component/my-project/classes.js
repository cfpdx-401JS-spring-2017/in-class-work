
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    return `Hello ${this.name}`;
}

function SuperHero(name) {
    Person.call(this, name);
}

SuperHero.prototype = Object.create(Person.prototype);

SuperHero.prototype.sayHello = function () {
    return Person.prototype.sayHello.call(this) + ' I am super';
}

const hero = new SuperHero('David');

console.log(hero.sayHello());

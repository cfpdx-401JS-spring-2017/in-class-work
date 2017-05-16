// Remember: function properties of object literals (methods)
// can omit the ": function" part
const obj = {
    name: 'name',
    sayHello() {}
};

class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {}
}

function SuperHero(name) {
    Person.call(this, name);
}

SuperHero.prototype = Object.create(Person.prototype);

SuperHero.prototype.sayHello = function() {
    return Person.prototype.sayHello.call(this) + ' I am super';
};

const hero = new SuperHero('David');

console.log(hero.sayHello());

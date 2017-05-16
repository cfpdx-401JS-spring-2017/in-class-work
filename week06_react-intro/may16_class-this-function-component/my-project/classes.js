class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        return `Hello my name is ${this.name}`;
    }
}

class SuperHero extends Person {
    constructor(name, power) {
        super(name);
        this.power = power;
    }

    sayHello() {
        return super.sayHello() + ' I am a super and my power is ' + this.power;
    }
}

const hero = new SuperHero('David', 'Omnipotence')
console.log(hero.sayHello());
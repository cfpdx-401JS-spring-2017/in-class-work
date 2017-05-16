class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        return `Hello my name is ${this.name}`;
    }
}

class SuperHero extends Person {
    constructor({ name, power, archEnemy = 'T^3' }) {
        super(name);
        this.power = power;
        this.archEnemy = archEnemy;
    }

    sayHello() {
        return `${super.sayHello()} I am a super and my power is ${this.power}.
And I will stop ${this.archEnemy} at any cost!`;
    }
}

const hero = new SuperHero({
    name: 'David',
    power: 'Omnipotence'
});

console.log(hero.sayHello());
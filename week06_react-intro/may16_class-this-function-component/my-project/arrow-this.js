

class Person {
    constructor(name) {
        this.name = name;
    }

    sayHelloAsync() {
        setTimeout(() => {
            console.log(`Hello ${this.name}`);
        });
    }
}

const person = new Person('David');
person.sayHelloAsync();
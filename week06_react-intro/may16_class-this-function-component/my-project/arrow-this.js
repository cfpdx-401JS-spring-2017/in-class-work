

class Person {
    constructor(name) {
        this.name = name;
    }

    sayHelloAsync() {
        // use "self" or "that"
        var self = this;
        setTimeout(function () {
            console.log(`Hello ${self.name}`);
        });

        // use bind
        setTimeout(function () {
            console.log(`Hello ${this.name}`);
        }.bind(this));

        // arrow function FTW!        
        setTimeout(() => {
            console.log(`Hello ${this.name}`);
        });
    }
}

const person = new Person('David');
person.sayHelloAsync();
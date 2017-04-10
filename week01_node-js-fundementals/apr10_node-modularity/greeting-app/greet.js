function sayHello(name = 'stranger') {
    // make greeting hello and the name
    const greeting = `Hello ${name}`;
    return greeting;
}

module.exports = sayHello;
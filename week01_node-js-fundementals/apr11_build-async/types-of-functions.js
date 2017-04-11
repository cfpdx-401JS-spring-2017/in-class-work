say('hello');

// function definition
function say(arg) {
    console.log(arg);
}

// this won't work:
// fn('hello');

// (anonymous) function expression being assigned to a variable;
const fn = function (text) {
    console.log(text);
};

fn('hello fn!');

const fn2 = function me(text) {
    console.log(text);
    if(text === 'yo') me('ya');
};

fn2('yo');

const fn3 = text => console.log(text);

fn3('hello =>');
const stack = Symbol('stack');

class Stack {
    
    constructor() {
        this[stack] = [];
    }

    push(item) {
        this[stack].push(item);
    }

    pop(item) {
        return this[stack].pop(item);
    }

    peek(item) {
        return this[stack][this[stack].length - 1];
    }
}

module.exports = {
    symbol: stack,
    Stack
};
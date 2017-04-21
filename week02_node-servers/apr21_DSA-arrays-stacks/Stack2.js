// revealing module pattern

module.exports = function Stack () {
    const array = [];

    return {
        push(item) {
            array.push(item);
        },

        pop() {
            return array.pop();
        },

        peek() {
            return array[array.length - 1];
        }
    }
}

const stack = new Stack();

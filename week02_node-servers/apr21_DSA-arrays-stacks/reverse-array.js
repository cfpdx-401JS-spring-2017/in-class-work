
function reverseArray(array) {
    const stack = [];

    // push each item of the array onto our stack
    array.forEach(each => stack.push(each));

    let item;
    let index = 0;
    while(  (item = stack.pop()) ) {
        array[index++] = item;
    }

    return array;
}

console.log(reverseArray(['I', 'love', 'dogs']));
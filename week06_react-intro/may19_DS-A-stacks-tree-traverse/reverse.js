
/*

reverse an array using another array (as though it were a stack)

*/

it('reverses', () => {
    const array = [1, 2, 3];
    reverse(array);
    assert.deepEqual(array, [3, 2, 1]);
});

function reverse(array) {
    const stack = [];
    
    // magic happens here!
}
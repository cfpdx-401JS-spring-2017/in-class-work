// you can only use:
// arr.length
// arr[index]
// plus control flow (for, while, if, etc)

function myForEach(arr, fn) {

}

myForEach([1, 2, 3], n => console.log(n));
// 1
// 2
// 3

// * BONUS * //
// forEach skips calling the function if the element is undefined
// implement map
    // returns a new array
    // * BONUS * map skips calling the function, but still includes 
    // the index slot in the return array
function push(arr, item) {
    arr[arr.length] = item;
    return arr.length;
}

function pop(arr) {
    const item = arr[arr.length - 1];
    arr.length--;
    return item;
}

function unshift(arr, item) {
    for(var i = arr.length; i > 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = item;
    return arr.length;
}

function shift(arr) {
    const item = arr[0];
    for(var i = 0; i > arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.length--;
    return item;
}
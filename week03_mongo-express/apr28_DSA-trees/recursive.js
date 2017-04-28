

function recurse(input, max) {
    console.log('before', input);

    if(input < max) {
        var output = recurse(input+1, max);
        console.log(output);
    }

    return 'after' + input;
}

console.log(recurse(0, 3));
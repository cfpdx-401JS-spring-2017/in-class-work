

function matchingParens(str) {

    const left = [];

    for(var i = 0; i < str.length; i++) {
        const char = str[i];
        if(char === '(') left.push(char)
        else if(char === ')') {
            if(!left.pop()) return false;
        }
    }

    return !left.pop();
}
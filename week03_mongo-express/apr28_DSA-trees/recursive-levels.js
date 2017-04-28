
// track a string that is both format and levels
function traverse(node, indent = '') {
    console.log(indent + node.data);
    indent += '  ';
    node.children.forEach(child => {
        traverse(child, indent);
    })
}

// or use a number and repeat that number of formatted indents
const INDENT = '  ';
function traverse(node, indent = 0) {
    console.log(INDENT.repeat(indent) + node.data);
    indent++;
    node.children.forEach(child => {
        traverse(child, indent);
    });
}

// either provide a default for top level:
function traverse(node, indent = '') {
    console.log(indent + node.data);
    indent += '  ';
    node.children.forEach(child => {
        traverse(child, indent);
    });
}

// or create a wrapper function
function traverse(node) {

    recurse(node, 0);

    function recurse(node, indent) {
        console.log(indent + node.data);
        indent++;
        node.children.forEach(child => {
            recurse(child, indent);
        });
    }
}

// ideal for accumulating data results
function traverse(node) {

    const result = [];    
    recurse(node, 0);

    function recurse(node, indent) {
        result.push({ level: indent, data: node.data });
        indent += 1;
        node.children.forEach(child => {
            recurse(child, indent);
        });
    }

    return result;
}
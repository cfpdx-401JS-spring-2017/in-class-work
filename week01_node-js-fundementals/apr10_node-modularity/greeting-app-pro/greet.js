const DEFAULT = { name: 'stranger' };

function greet({ name = DEFAULT.name } = DEFAULT) {
    return `hello ${name}`;
}

module.exports = greet;
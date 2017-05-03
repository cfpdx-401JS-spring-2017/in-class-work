const assert = require('assert');

describe('destructuring', () => {

    it('plucks', () => {
        const person = { name: 'fred', age: 12, color: 'blue' };

        const name = person.name;
        const color = person.color;

        assert.equal(name, person.name);
        assert.equal(color, person.color);


    });  
});
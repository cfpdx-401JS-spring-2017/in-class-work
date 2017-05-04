const assert = require('assert');

describe('destructuring', () => {

    it('plucks', () => {
        const person = { name: 'fred', age: 12, color: 'blue' };

        const { name, color } = person;

        assert.equal(name, person.name);
        assert.equal(color, person.color);
    });  

    it('destructures arguments', () => {

        function sendPasswordReset({ email, password }) {
            assert.equal(email, 'me@me.com');
            assert.equal(password, 'abc');
        }
        
        const person = {
            email: 'me@me.com',
            password: 'abc'
        };

        sendPasswordReset(person);
    });

});
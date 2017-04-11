const assert = require('assert');
const dayGreet = require('../day-greeter');
const toTimeOfDay = require('../to-time-of-day');

describe('time of day greeter', () => {

    it('greets name with time of day', () => {
        const greeting = dayGreet('marty', '09:36');
        assert.equal(greeting, 'Good morning marty');
    });

    it('returns correct time of day based on 24hr time', () => {
        assert.equal(toTimeOfDay('00:00'), 'morning');
        assert.equal(toTimeOfDay('11:59'), 'morning');
        assert.equal(toTimeOfDay('12:00'), 'afternoon');
        assert.equal(toTimeOfDay('16:59'), 'afternoon');
        assert.equal(toTimeOfDay('17:00'), 'evening');
        assert.equal(toTimeOfDay('23:59'), 'evening');
    });

});
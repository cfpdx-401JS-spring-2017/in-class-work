const toTimeOfDay = require('./to-time-of-day');

function dayGreet(name, time) {
    const timeOfDay = toTimeOfDay(time);
    return `Good ${timeOfDay} ${name}`;
}

module.exports = dayGreet;
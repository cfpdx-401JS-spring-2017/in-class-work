function toTimeOfDay(militaryTime) {
    const split = militaryTime.split(':');
    const hour = parseInt(split[0]);
    if(hour <= 11) {
        return 'morning';
    }
    if(hour <= 16) {
        return 'afternoon';
    }
    return 'evening';
}

module.exports = toTimeOfDay;
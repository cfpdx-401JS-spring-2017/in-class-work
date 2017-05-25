const grandHall = {
    key: 'GH',
    name: 'Grand Hall',
    description: 'You are standing in a grand hall',
    exits: [
        { door: 'big iron door', key: 'DN', room: null },
        { door: 'small wooden door', key: 'KN', room: null }
    ]
};

const kitchen = {
    key: 'KN',
    name: 'Kitchen',
    description: 'You are in the kitchen. Hope you are hungry.',
    exits: [
        { door: 'small wooden door', key: 'GH', room: null }
    ]
};

const dungeon = {
    key: 'DN',
    name: 'Dungeon',
    description: 'You are in a smelly dungeon',
    exits: [
        { door: 'big iron door', key: 'GH', room: null }
    ]
};

const rooms = [grandHall, kitchen, dungeon];

// for each room, find and populate the exit room
// based on the key
rooms.forEach(room => {
    room.exits.forEach(exit => {
        exit.room = rooms.find(r => r.key === exit.key);
    });
})
// grandHall.rooms[0].room = dungeon;
// grandHall.rooms[1].room = kitchen;
// kitchen.rooms[0].room = grandHall;
// dungeon.rooms[0].room = grandHall;

export default rooms[0];

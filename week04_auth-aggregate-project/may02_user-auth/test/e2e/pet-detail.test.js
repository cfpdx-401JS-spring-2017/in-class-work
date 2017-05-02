const db = require('./db');
const request = require('./request');
const assert = require('chai').assert;

describe.only('pets api', () => {
    before(db.drop);

    let store, toy1, toy2, vaccine;
    before(() => {
        return Promise.all([
            request.post('/api/stores').send({ name: 'downtown' }),
            request.post('/api/toys').send({ name: 'feather chaser', silent: true }),
            request.post('/api/toys').send({ name: 'tumble ball', silent: false }),
            request
                .post('/api/vaccines')
                .send({ name: 'okiedokisis', manufacturer: 'petmed' })
        ])
            .then(results => results.map(res => res.body))
            .then(bodies => {
                store = bodies[0];
                toy1 = bodies[1];
                toy2 = bodies[2];
                vaccine = bodies[3];
            });
    });

    it('detail pet GET', () => {
        let pet = {
            name: 'petly',
            legs: 3,
            store: store._id,
            toys: [toy1._id, toy2._id],
            vaccinations: [
                { date: '1/7/2017', dose: '5', vaccine: vaccine._id }
            ]
        };

        return request
            .post('/api/pets')
            .send(pet)
            .then(res => {
                pet = res.body;
                return request.get(`/api/pets/${pet._id}`);
            })
            .then(res => {
                const got = res.body;

                assert.deepEqual(got, {
                    _id: pet._id,
                    name: pet.name,
                    legs: pet.legs,
                    store: {
                        _id: store._id,
                        name: store.name
                    },
                    toys: [{
                        _id: toy1._id,
                        name: toy1.name
                    }, {
                        _id: toy2._id,
                        name: toy2.name
                    }],
                    vaccinations: [
                        {
                            date: pet.vaccinations[0].date,
                            dose: pet.vaccinations[0].dose,
                            vaccine: {
                                _id: vaccine._id,
                                name: vaccine.name
                            }
                        }
                    ]
                });
            })
            .catch(err => {
                throw err;
            });
    });
});

const db = require('./db');
const request = require('./request');
const assert = require('chai').assert;

describe.only('pets api', () => {
    before(db.drop);

    let token = '';    
    before(() => {
        return request.post('/api/auth/signup')
            .send({ email: 'me@me.com', password: 'abc' })
            .then(res => {
                token = res.body.token;
            });
    });

    function seedData(url, data) {
        return request.post(url).send(data).set('Authorization', token);
    }

    let store, toy1, toy2, vaccine;
    before(() => {
        return Promise.all([
            seedData('/api/stores', { name: 'downtown' }),
            seedData('/api/toys', { name: 'feather chaser', silent: true }),
            seedData('/api/toys', { name: 'tumble ball', silent: false }),
            seedData('/api/vaccines', { name: 'okiedokisis', manufacturer: 'petmed' })
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
            name: 'pet-lee',
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
            .set('Authorization', token)
            .then(({ body: pet }) => {
                return request
                    .get(`/api/pets/${pet._id}`)
                    .set('Authorization', token);
            })
            .then(({ body: pet }) => {
                
                assert.deepEqual(pet, {
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

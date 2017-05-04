const db = require('./db');
const request = require('./request');
const assert = require('chai').assert;

describe('auth', () => {

    before(db.drop);

    const user = {
        username: 'user',
        password: 'abc'
    };

    describe('user management', () => {

        const badRequest = (url, data, code, error) => 
            request
                .post(url)
                .send(data)
                .then(
                    () => { throw new Error('status should not be okay'); },
                    res => {
                        assert.equal(res.status, code);
                        assert.equal(res.response.body.error, error);
                    }
                );
        
        it('signup requires username', () => 
            badRequest('/auth/signup', { password: 'abc' }, 400, 'username and password must be supplied')
        );		
        
        it('signup requires password', () =>
            badRequest('/auth/signup', { username: 'abc' }, 400, 'username and password must be supplied')
        );

        let token = '';

        it('signup', () => 
            request
                .post('/auth/signup')
                .send(user)
                .then(res => assert.ok(token = res.body.token))
        );

        it('can\'t use same username', () => 
            badRequest('/auth/signup', user, 400, 'username user already exists')
        );

                
        it('signin requires username', () => 
            badRequest('/auth/signin', { password: 'abc' }, 400, 'username and password must be supplied')
        );		
        
        it('signin requires password', () =>
            badRequest('/auth/signin', { username: 'abc' }, 400, 'username and password must be supplied')
        );

        it('signin with wrong user', () =>
            badRequest('/auth/signin', { username: 'bad user', password: user.password }, 401, 'invalid username or password')
        );

        it('signin with wrong password', () =>
            badRequest('/auth/signin', { username: user.username, password: 'bad' }, 401, 'invalid username or password')
        );

        it('signin', () => 
            request
                .post('/auth/signin')
                .send(user)
                .then(res => assert.ok(res.body.token))
        );


        it('token is invalid', () =>
            request
                .get('/auth/verify')
                .set('Authorization', 'bad token')
                .then(
                    () => { throw new Error('success response not expected'); },
                    (res) => { assert.equal(res.status, 401); }
                )
        );

        it('token is valid', () =>
            request
                .get('/auth/verify')
                .set('Authorization', token)
                .then(res => assert.ok(res.body))
        );


    });

    describe('unauthorized', () => {

        it('401 with no token', () => {
            return request
                .get('/actors')
                .then(
                    () => { throw new Error('status should not be 200'); },
                    res => {
                        assert.equal(res.status, 401);
                        assert.equal(res.response.body.error, 'Unauthorized');
                    }
                );
        });

        it('403 with invalid token', () => {
            return request
                .get('/actors')
                .set('Authorization', 'badtoken')
                .then(
                    () => { throw new Error('status should not be 200'); },
                    res => {
                        assert.equal(res.status, 401);
                        assert.equal(res.response.body.error, 'Unauthorized');
                    }
                );
        });

    });

    
});
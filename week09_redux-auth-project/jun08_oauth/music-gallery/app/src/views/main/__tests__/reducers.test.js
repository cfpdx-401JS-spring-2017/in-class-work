import assert from 'assert';
import * as actions from '../constants';
import { user, token, authError as error } from '../reducers';

describe('user', () => {
  it('pass-thru', () => {
    const state = {};
    assert.equal(user(state, { type: 'NO_ACTION' }), state);
  });

  it('fetched', () => {
    const userState = { name: 'user' };
    assert.deepEqual(user(null, { 
      type: actions.FETCHED_USER,
      payload: userState 
    }), userState);
  });

  it('LOGOUT and AUTH_FAILED clears user', () => {
    assert.equal(user({}, { type: actions.LOGOUT }), null);
    assert.equal(user({}, { type: actions.AUTH_FAILED }), null);
  });

});

describe('token', () => {
  it('pass-thru', () => {
    const state = {};
    assert.equal(token(state, { type: 'NO_ACTION' }), state);
  });

  it('GOT_TOKEN adds token', () => {
    const tokenState = {};
    assert.deepEqual(token(null, { 
      type: actions.GOT_TOKEN,
      payload: tokenState 
    }), tokenState);
  });

  it('LOGOUT and AUTH_FAILED clears user', () => {
    assert.equal(token({}, { type: actions.LOGOUT }), null);
    assert.equal(token({}, { type: actions.AUTH_FAILED }), null);
  });

});

describe('authError', () => {
  it('pass-thru', () => {
    const state = {};
    assert.equal(error(state, { type: 'NO_ACTION' }), state);
  });

  it('AUTH_FAILED adds error', () => {
    const errorState = {};
    assert.deepEqual(error(null, { 
      type: actions.AUTH_FAILED,
      payload: errorState 
    }), errorState);
  });

  it('LOGOUT and GOT_TOKEN and FETCHED_USER clears error', () => {
    assert.equal(error({}, { type: actions.LOGOUT }), null);
    assert.equal(error({}, { type: actions.GOT_TOKEN }), null);
    assert.equal(error({}, { type: actions.FETCHED_USER }), null);
  });

});

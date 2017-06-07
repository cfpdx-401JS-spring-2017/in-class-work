import store, { reducers } from '../store';
import assert from 'assert';

it('returns same state with no action', () => {
  const state = {};
  const newState = reducers(state, { type: 'NOT_AN_ACTION'});
  assert.equal(newState, state);
});

it('changes sort', () => {
  const people = [{ name: 'Fred' }, { name: 'Albina' }];
  const state = { sort: 'birthday', people };
  const newState = reducers(state, { 
    type: 'CHANGE_SORT',
    payload: 'name'
  });
  assert.deepEqual(newState, {
    sort: 'name',
    people,
    sortedPeople: [{ name: 'Albina' }, { name: 'Fred' } ]
  });
});

it('selected person', () => {
  const people = [{ name: 'Fred' }, { name: 'Albina' }];
  const state = { people, person: null };
  const newState = reducers(state, { 
    type: 'SELECT_PERSON',
    payload: people[1]
  });

  assert.deepEqual(newState, {
    people,
    person: people[1]
  });
});
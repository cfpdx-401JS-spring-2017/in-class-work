import { createStore } from 'redux';
import people from './people';

const reducers = (state, action) => {
  switch(action.type) {
    case 'CHANGE_SORT': {
      const by = action.payload;
      const sortedPeople = state.people.slice();
      switch(by){
        case 'birthday':
          sortedPeople.sort((a, b) => {
            return a.birthday - b.birthday;
          });
          break;
        case 'name':
          sortedPeople.sort((a, b) => {
            return a.name.localeCompare(b);
          });
          break;
      } 
      return { ...state, sortedPeople }
    }
    case 'SELECT_PERSON': {
      return { ...state, person: action.payload };
    }

  }
};

const store = createStore(
  reducers,
  {
    people,
    person: null,
    sort: 'name',
    sortedPeople: people
  }
)

export default store;


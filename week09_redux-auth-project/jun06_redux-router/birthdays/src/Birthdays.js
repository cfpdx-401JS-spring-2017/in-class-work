import React from 'react';
import { connect } from 'react-redux';
import TimeUntil from './TimeUntil';

function Birthdays({ people, person, sort, changeSort, selectPerson }) {
  return (
    <div>
      {['name', 'birthday'].map(field => (
        <button key={field} 
          disabled={field === sort}
          onClick={() => changeSort(field)}
        >
          sort by {field}
        </button>
      ))}
      <ul>
        { people.map(person => {
          const { name, birthday } = person;
          return <li key={name}
            onClick={() => selectPerson(person)}>
            { name } { birthday.getMonth() + 1 }/{ birthday.getDate() }
          </li>
        })}
      </ul>
      { person ? <TimeUntil {...person}/> : 'Select a person' }
    </div>
  );
}

const mapStateToProps = state => {
  return ({ 
    people: state.sortedPeople, 
    person: state.person,
    sort: state.sort
  });
}; 

const changeSort = by => ({
  type: 'CHANGE_SORT', 
  payload: by
});

const selectPerson = person => ({
  type: 'SELECT_PERSON', 
  payload: person
});

export default connect(
  mapStateToProps, {
    changeSort,
    selectPerson
  }
)(Birthdays);
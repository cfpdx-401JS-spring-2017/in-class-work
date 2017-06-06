import React from 'react';
import { connect } from 'react-redux';

function Birthdays({ people, person, dispatch }) {
  const now = new Date();
  const until = person 
    ? Math.floor((person.birthday.getTime() - new Date(`${now.getMonth()+1}/${now.getDate()}`).getTime())/(1000*60*60*24)) 
    : 0;
  return (
    <div>
      {['name', 'birthday'].map(field => (
        <button key={field} onClick={() => dispatch({ type: 'CHANGE_SORT', payload: field })}>
          sort by {field}
        </button>
      ))}
      <ul>
        { people.map(person => {
          const { name, birthday } = person;
          return <li key={name}
            onClick={() => dispatch({ type: 'SELECT_PERSON', payload: person })}>
            { name } { birthday.getMonth() + 1 }/{ birthday.getDate() }
          </li>
        })}
      </ul>
      { person && 
        <p>
          There are {until} days until {person.name}'s birthday.
        </p>
      }
    </div>
  );
}

const mapStateToProps = state => {
  return ({ people: state.sortedPeople, person: state.person })
}; 

export default connect(mapStateToProps)(Birthdays);
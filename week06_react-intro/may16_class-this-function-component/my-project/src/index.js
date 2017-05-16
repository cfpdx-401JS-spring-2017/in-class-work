import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

function Simples(props) {
  return <div>
    {props.places.map(place =>
      <Simple greeting={props.greeting} place={place} />
    )}
  </div>
}
function Simple({ greeting, place }) {
  return <div>{greeting} {place}</div>;
}

ReactDOM.render(
  <Simples
    places={['world', 'Portland', 'universe']}
    greeting="Hola"/>,
  document.getElementById('root')
);

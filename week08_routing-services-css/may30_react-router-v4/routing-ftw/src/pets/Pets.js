import React from 'react';
// import { Redirect } from 'react-router-dom';
import qs from 'qs';

export default function Pets({ match, location }) {
  let search = location.search;
  // console.log(search);
  search = search.slice(1);
  // console.log(search);
  const query = qs.parse(search);
  // console.log(query);
  const view = query.view;

  return (
    <div>
      <h2>Pets Page</h2>
      <h3>{view}</h3>
      <pre>{JSON.stringify(match, true, 2)}</pre>
    </div>
  );
}
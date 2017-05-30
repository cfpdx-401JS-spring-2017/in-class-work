import React from 'react';
import qs from 'qs';

export default function Stores({ match, location }) {
  const { view } = qs.parse(location.search.slice(1));
  return (
    <div>
      <h2>Stores Page</h2>
      <pre>{JSON.stringify(match, true, 2)}</pre>
      <div>{view}</div>
    </div>
  );
}
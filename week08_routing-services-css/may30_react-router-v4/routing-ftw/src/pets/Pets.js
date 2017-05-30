import React from 'react';

export default function Pets({ match }) {
  return (
    <div>
      <h2>Pets Page</h2>
      <pre>{JSON.stringify(match, true, 2)}</pre>
    </div>
  );
}
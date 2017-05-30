import React from 'react';

export default function Stores({ match }) {
  return (
    <div>
      <h2>Stores Page</h2>
      <pre>{JSON.stringify(match, true, 2)}</pre>
    </div>
  );
}
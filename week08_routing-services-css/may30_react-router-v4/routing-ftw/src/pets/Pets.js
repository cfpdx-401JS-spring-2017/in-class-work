import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Pets({ match }) {
  return (
    <div>
      <h2>Pets Page</h2>
      <pre>{JSON.stringify(match, true, 2)}</pre>
    </div>
  );
}
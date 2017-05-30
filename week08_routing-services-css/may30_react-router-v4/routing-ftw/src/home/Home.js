import React from 'react';

export default function Home({ match, location, history }) {
  return (
    <div>
      <h2>Home Page</h2>
      <pre>{JSON.stringify(match, true, 2)}</pre>
      <pre>{JSON.stringify(location, true, 2)}</pre>
      <pre>{JSON.stringify(history, true, 2)}</pre>
    </div>
  );
}
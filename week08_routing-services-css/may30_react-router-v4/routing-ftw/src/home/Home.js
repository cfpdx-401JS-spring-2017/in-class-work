import React from 'react';

export default function Home({ match }) {
  return (
    <div>
      <h2>Home Page</h2>
      <pre>{JSON.stringify(match, true, 2)}</pre>
    </div>
  );
}
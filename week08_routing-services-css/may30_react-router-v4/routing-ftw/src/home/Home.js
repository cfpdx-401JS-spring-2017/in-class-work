import React from 'react';

export default function Home({ match, foo }) {
  return (
    <div>
      <h2>Home Page {foo}</h2>
      <pre>{JSON.stringify(match, true, 2)}</pre>
    </div>
  );
}
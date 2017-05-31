import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ match, location, history }) {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the online pet store</p>
      <p>
        Get started with <Link to="/stores">Stores</Link>.
      </p>
      <p>
        Take a look at our <Link to="/pets">Pets</Link>.
      </p>
    </div>
  );
}
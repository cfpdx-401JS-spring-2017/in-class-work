import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/stores">Stores</Link></li>
          <li><Link to="/pets">Pets</Link></li>
      </ul>
   </nav>
  );
}
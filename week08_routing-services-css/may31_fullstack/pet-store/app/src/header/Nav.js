import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ name, to }) => (
  <li>
    <Link to={to}>{name}</Link>
  </li>
);

export default function Nav() {
    return (
      <nav>
        <ul className="nav">
          <NavItem to='/' name='Home'/>
          <NavItem to='/stores' name='Stores'/>
          <NavItem to='/pets' name='Pets'/>
        </ul>
      </nav>
    );
}
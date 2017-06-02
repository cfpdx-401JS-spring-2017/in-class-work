import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: turquoise;
  &:hover {
    color: lightgreen;
  }
`;


const NavItem = ({ name, to }) => (
  <li>
    <StyledLink to={to}>{name}</StyledLink>
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
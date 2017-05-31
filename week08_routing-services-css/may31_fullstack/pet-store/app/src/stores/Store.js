import React from 'react';
import { Link } from 'react-router-dom';

export default function Store({ name, to }) {
  return (
    <li><Link to={to}>{name}</Link></li>   
  );
}
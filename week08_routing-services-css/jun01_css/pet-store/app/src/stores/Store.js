import React from 'react';
import { Link } from 'react-router-dom';

export default function Store({ name, to, className }) {
  return (
    <li className={className}><Link className={className} to={to}>{name}</Link></li>   
  );
}
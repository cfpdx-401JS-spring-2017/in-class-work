import React from 'react';
import './Task.css';

export default function Task({ name, type }) {
  return (
      <li className={`task ${type}`}>
        { name } ({ type })
      </li>
  );
}

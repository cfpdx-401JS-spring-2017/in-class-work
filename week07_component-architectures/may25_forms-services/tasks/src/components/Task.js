import React from 'react';
import './Task.css';

export default function Task({ name, type, onDelete }) {
  return (
      <li className={`task ${type}`}>
          {name} ({type})
        <button className="delete"
              onClick={onDelete}
        >🗑</button>
      </li>
  );
}

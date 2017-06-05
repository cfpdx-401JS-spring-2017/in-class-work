import React from 'react';

import { addAlbum } from '../actions/counter.actions';

function AddAlbum({ addAlbum }) {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      addAlbum({ name: e.target.elements.name.value });
    }}>
      <input required name="name"/>
      <button type="submit">Add</button>
    </form>
  );
}
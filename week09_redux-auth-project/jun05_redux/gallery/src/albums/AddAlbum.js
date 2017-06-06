import React from 'react';
import { connect } from 'react-redux';
import { addAlbum } from './actions';

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

function mapDispatchToProps(dispatch) {
  return {
    addAlbum() { 
      return dispatch(addAlbum()); 
    }
  };
}

const AddAlbumContainer = connect(null, mapDispatchToProps)(AddAlbum);

export default AddAlbumContainer;
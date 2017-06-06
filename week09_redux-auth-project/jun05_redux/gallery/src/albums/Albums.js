import React from 'react';
import AddAlbum from './AddAlbum';

export default function Albums({ albums, loading, error }) {

  if(loading) return <div>Loading...</div>;

  return (
    <div>
      <ul>
        {albums.map(album => (
          <li>{album.name}</li>
        ))}
      </ul>
      {error && <pre style={{ color: 'red' }}>{error}</pre>}
      <AddAlbum/>
    </div>
  );
}
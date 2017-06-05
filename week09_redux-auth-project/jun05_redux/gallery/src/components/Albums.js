import React from 'react';

export default function Albums({ albums, loading, error }) {
  if(loading) return <div>Loading...</div>;
  console.log("ERROR", error);
  return (
    <div>
      <ul>
        {albums.map(album => (
          <li>{album.name}</li>
        ))}
      </ul>
      {error && <pre style={{ color: 'red' }}>{error}</pre>}
      {/*{add album will go here}*/}
    </div>
  );
}
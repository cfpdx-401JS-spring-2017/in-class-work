import React, { Component } from 'react';
import AddImage from './AddImage';
import styled from 'styled-components';

const Div = styled.div`
  padding: 10px;
`;

export default class AlbumDetail extends Component {

  componentDidMount() {
    const { id, getAlbum } = this.props;
    getAlbum(id);
  }

  render() {
    const { album, loading, error } = this.props;
    if (!album) return null;
    
    const { name, images } = album;
    const { addImage, removeImage } = this.props;

    if(loading) return <div>Loading...</div>;

    return (
      <Div>
        <h2>{ name }</h2>
        <ul>
          {images.map(({ _id, title, url, description }) => (
            <li key={_id}>
              {title}
              <img style={{ height: '100px' }} src={url} alt={description}/>
              {description}
              <button className="action" onClick={() => removeImage(_id)}>🗑 </button>
            </li>
          ))}
        </ul>
        {error && <pre style={{ color: 'red' }}>{error}</pre>}
        <AddImage addImage={addImage}/>
      </Div>
    );
  }
}
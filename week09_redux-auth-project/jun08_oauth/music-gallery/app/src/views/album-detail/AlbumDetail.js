import React, { Component } from 'react';
import AddImage from './AddImage';
import Poster from './Poster';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  padding: 10px;
  clear: both;
`;

const List = styled.ul`
  margin: 0; 
  padding: 0;
`;

const Item = styled.li`
  width: 112px;
  float: left;
  list-style-type: none;
  margin-right: 10px;
`;

const Return = styled(Link)`
  text-decoration: none;
  margin-left: 5px;
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
    const { addImage /*, removeImage*/ } = this.props;

    if(loading) return <div>Loading...</div>;

    return (
      <Div>
        <h2><Return to="/albums">Albums</Return> &gt; { name }</h2>
        <List>
          {images.map(({ _id, ...image }) => (
            <Item key={_id}>
              <Poster {...image}/>
            </Item>
          ))}
        </List>
        <Div>
          {error && <pre style={{ color: 'red' }}>{error}</pre>}
          <h4>Add a New Image</h4>
          <AddImage addImage={addImage}/>
        </Div>
      </Div>
    );
  }
}
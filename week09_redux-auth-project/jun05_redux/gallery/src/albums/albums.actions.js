import * as actions from '../constants/albums.const';
import api from '../api/albumsApi';

export function getAlbums() {

  return dispatch => {
    dispatch({ type: actions.FETCHING_ALBUMS });
    
    api.getAll()
      .then(albums => {
        dispatch({ type: actions.FETCHED_ALBUMS, payload: albums });
      })
      .catch(error => {
        dispatch({ type: actions.FETCHED_ALBUMS_ERROR, payload: error });
      });
  };

}

export function addAlbum(album) {
  return dispatch => {
    dispatch({ type: actions.ADDING_ALBUM });
    
    api.add(album)
      .then(saved => {
        dispatch({ type: actions.ADDED_ALBUM, payload: saved });
      })
      .catch(error => {
        dispatch({ type: actions.ADDED_ALBUM_ERROR, payload: error });
      });
  };
}
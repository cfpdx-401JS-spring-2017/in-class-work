import * as actions from './constants';
import api from '../api/albumsApi';

// action creator called "getAlbums"
export function getAlbums() {

  // it "creates" an action that is a function,
  // meaning it will get called back with dispatch
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
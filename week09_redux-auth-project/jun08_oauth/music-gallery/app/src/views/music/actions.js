import * as actions from './constants';
import api from '../../api/musicApi';

export function getMusic() {

  return dispatch => {
    dispatch({ type: actions.FETCHING_MUSIC });
    
    api.get()
      .then(
        music => {
          dispatch({ type: actions.FETCHED_MUSIC, payload: music });
        },
        error => {
          dispatch({ type: actions.FETCHED_MUSIC_ERROR, payload: error });
        }
      );
  };

}
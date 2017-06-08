import { combineReducers } from 'redux';
import { token, user, authError } from '../views/main/reducers';
import { albums, albumsError, albumsLoading } from '../views/albums/reducers';
import { album, albumError, albumLoading } from '../views/album-detail/reducers';
import { music, musicError, musicLoading } from '../views/music/reducers';

export default combineReducers({
  token,
  user,
  authError,
  albums,
  albumsError,
  albumsLoading,
  album,
  albumError,
  albumLoading,
  music,
  musicError,
  musicLoading
});
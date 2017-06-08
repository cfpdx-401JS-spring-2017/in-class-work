import { combineReducers } from 'redux';
import { token, user, authError } from './main/reducers';
import { albums, albumsError, albumsLoading } from './albums/reducers';
import { album, albumError, albumLoading } from './album-detail/reducers';

export default combineReducers({
  token,
  user,
  authError,
  albums,
  albumsError,
  albumsLoading,
  album,
  albumError,
  albumLoading
});
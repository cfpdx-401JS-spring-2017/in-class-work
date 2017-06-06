import { combineReducers } from 'redux';
import { albums, albumsError, albumsLoading } from './albums/reducers';
import { album, albumError, albumLoading } from './album-detail/reducers';

export default combineReducers({
  albums,
  albumsError,
  albumsLoading,
  album,
  albumError,
  albumLoading
});
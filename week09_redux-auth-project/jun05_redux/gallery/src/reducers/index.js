import { albums, albumsError, albumsLoading } from './albums';
import { combineReducers } from 'redux';

export default combineReducers({
  albums,
  albumsError,
  albumsLoading
});
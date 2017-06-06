import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import AlbumDetail from './AlbumDetail';

function mapStateToProps(state) {
  return {
    album: state.album,
    error: state.albumError,
    loading: state.albumLoading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const AlbumDetailContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(AlbumDetail);

// export the wrapper
export default AlbumDetailContainer;

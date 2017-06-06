import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import Albums from './Albums';

function mapStateToProps(state) {
  return {
    albums: state.albums,
    error: state.albumsError,
    loading: state.albumsLoading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const AlbumsContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Albums);

// export the wrapper
export default AlbumsContainer;

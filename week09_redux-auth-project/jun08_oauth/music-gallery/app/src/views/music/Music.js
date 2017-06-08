import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

class Music extends Component {

  componentDidMount() {
    this.props.getMusic();
  }

  render() {
    const { music, loading } = this.props;
    const { items } = music;
    if(loading) return <div>Loading...</div>;

    return (
      <div>
        <h2>Search Playlists</h2>
        <ul>
          {items.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    music: state.music,
    error: state.musicError,
    loading: state.musicLoading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Music);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { userFromToken } from './actions';
import styled from 'styled-components';

const CenteredDiv = styled.div`
  padding: 10px;
  text-align: center;
`;

function User({ user, spotify }) {
  const spotifyLinked = <span>Linked to Spotify</span>;
  const noSpotify = (
    <button onClick={() => spotify(user._id)}>
      Link Spotify
    </button>
  );
  
  return (
    <CenteredDiv>
        <h2>{user.name}</h2>
        <CenteredDiv>
          {user.spotify && user.spotify.id ? spotifyLinked : noSpotify}
        </CenteredDiv>
    </CenteredDiv>
  );
}

export default withRouter(connect(
  state => ({ 
    user: state.user 
  }),
  dispatch => ({ 
    fromToken(token) { dispatch(userFromToken(token)); },
    spotify(userId) { 
      window.location = `/api/auth/spotify/login?userId=${userId}&origin=${window.location}`; 
    } 
  })
)(User));
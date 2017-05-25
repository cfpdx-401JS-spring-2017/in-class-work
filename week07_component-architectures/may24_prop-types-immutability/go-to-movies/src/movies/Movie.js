import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

Movie.propTypes = {
  onSelect: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Poster: PropTypes.string,
    Title: PropTypes.string.isRequired
  })
}

export default function Movie({ movie, onSelect }) {
  const { imdbID, Poster, Title } = movie;
  return (
    <li className="movie" onClick={() => onSelect(imdbID) }>
      <div className="poster">
        <img src={Poster} alt={Title}/>
      </div>
      <div className='title'>
        {Title}
      </div>
    </li>
  );
}


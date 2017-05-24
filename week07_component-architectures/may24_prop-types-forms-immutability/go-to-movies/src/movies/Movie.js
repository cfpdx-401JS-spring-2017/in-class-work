import React from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

export default function Movie({ movie, onSelect }) {
  return (
    <li className="movie" onClick={() => onSelect(movie.imdbID) }>
      <div className="poster">
        <img src={movie.Poster} alt={movie.Title}/>
      </div>
      <div className='title'>
        {movie.Title}
      </div>
    </li>
  );
}

Movie.propTypes = {
  onSelect: PropTypes.func,
  movie: PropTypes.shape({
    imdbID: PropTypes.string,
    Poster: PropTypes.string,
    Title: PropTypes.string,
  })
}
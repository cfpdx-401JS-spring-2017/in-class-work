import React, { Component } from 'react';
import movieApi from '../movieApi';
import './MovieDetail.css';

export default class MovieDetail extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    movieApi.get(this.props.id)
      .then(movie => this.setState({ movie }));
  }

  render() {
    const { movie } = this.state;
    if (!movie) return <div>Loading...</div>;

    return (
      <div className="movie-detail">
        <div className="back">
          <a href="" onClick={e => {
            e.preventDefault();
            this.props.onBack();
          }}>
            &lt; Back to movies
          </a>
        </div>

        <div className="details">
          <div><strong>Title:</strong> <a href={movie.Website}>{movie.Title}</a></div>
          <div><strong>Year:</strong> {movie.Year}</div>
          <div><strong>Rated:</strong> {movie.Rated}</div>
          <div><strong>Production:</strong> {movie.Production}</div>
          <div><strong>Actors:</strong> {movie.Actors}</div>
          <div><strong>Director:</strong> {movie.Director}</div>
          <div><strong>Genre:</strong> {movie.Genre}</div>
          <div><strong>Plot:</strong> {movie.Plot}</div>
          <div><strong>Ratings:</strong>
            <ul>
              {movie.Ratings.map(rating => (
                <li key={rating.Source}>
                  {rating.Source} - {rating.Value}
                </li>
              ))}
            </ul>
          </div>
          
        </div>

      </div>
    );
  }  
}

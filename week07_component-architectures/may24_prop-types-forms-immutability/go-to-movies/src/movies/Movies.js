import React, { Component } from 'react';
import movieApi from '../movieApi';
import Movie from './Movie';
import Search from './Search';
import './Movies.css';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: '',
      movies: null
    };

    this.search = this.search.bind(this);
  }

  componentDidMount() { 
    this.search(this.props.search);
  }

  componentWillReceiveProps({ search }) {
    if(search !== this.props.search) this.search(search);
  }

  search(search) {
    this.setState({
      loading: true
    });

    movieApi
      .search(search)
      .then(movies => {
        this.setState({
          loading: false,
          error: '',
          movies
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error
        });
      });
  }

  render() {
    let display;

    if (this.state.loading) {
      display = <div>Loading...</div>;
    }
    else if (this.state.error) {
      display = <div>{this.state.error}</div>;
    }
    else if (!this.state.movies) {
      display = <div>Search for a movie!</div>;
    }
    else {
      display = (
        <ul className="movies">
          {this.state.movies.map(movie => {
            return <Movie
              key={movie.imdbID}
              movie={movie}
              onSelect={this.props.onSelect}/>;
          })}
        </ul>
      );
    }

    return (
      <div>
        <Search search={this.props.search} onSearch={this.props.onSearch}/>
        {display}
      </div>  
    );
  }
}

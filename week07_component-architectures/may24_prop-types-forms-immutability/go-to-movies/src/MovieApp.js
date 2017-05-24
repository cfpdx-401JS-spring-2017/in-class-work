import React, { Component } from 'react';
import './MovieApp.css';
import Movies from './movies/Movies';
import MovieDetail from './movies/MovieDetail';

export default class MovieApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedId: '',
      search: undefined
    }
    this.selectMovie = this.selectMovie.bind(this);
    this.setSearch = this.setSearch.bind(this);
  }

  selectMovie(selectedId = '') { 
    this.setState({ selectedId })
  }

  setSearch(search) {
    this.setState({ search });
  }

  render() {
    const { selectedId, search } = this.state;

    return (
      <div>
        <header>
          <h1>Movie Search App</h1>
        </header>
        <main>
          {selectedId
            ? <MovieDetail id={selectedId} onBack={() => this.selectMovie()}/>
            : <Movies
                search={search}
                onSearch={this.setSearch}
                onSelect={this.selectMovie} />
          }  
        </main>
      </div>
    );
  }
}

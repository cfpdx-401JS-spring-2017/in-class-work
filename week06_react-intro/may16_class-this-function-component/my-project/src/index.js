import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import MovieApp from './MovieApp';
// import RestaurantApp from './RestaurantApp';
import './index.css';

// function Greeting({ name }) {
//   return <div>Hello {name}</div>;
// }

// console.log(Greeting({ name: 'David' }));

class Movie extends PureComponent {
  render() {
    const { movie } = this.props;
    console.log('Movie', movie.title);
    return <li>{movie.title}</li>;
  }
}

class Movies extends PureComponent {
  constructor() {
    super();
    this.state = {
      movies: [
        { title: 'Star Wars' },
        { title: 'Star Trek' },
        { title: 'Star Search' },
      ]
    }
  }

  componentDidMount() {
    setTimeout(() => {
      const movies = this.state.movies.slice();
      const newMovie = { ...movies[2], title: 'Star Dust' };
      movies[2] = newMovie;
      this.setState({ movies });
    }, 2000);
  }

  render() {
    return (
      <ul>
        {this.state.movies.map((movie, i) => <Movie key={i} movie={movie} />)}
      </ul>
    );
  }
}



ReactDOM.render(
  <Movies/>,
  document.getElementById('root')
);
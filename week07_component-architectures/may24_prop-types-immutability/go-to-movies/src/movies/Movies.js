import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import movieApi from '../movieApi';
import Movie from './Movie';
import Search from './Search';
import './Movies.css';

export default class Movies extends PureComponent {

  static propTypes = {
    search: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  static defaultProps = {
    search: 'Star Wars'
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: '',
      movies: null
    };

    this.search = this.search.bind(this);

  }


  componentWillMount() {
    console.log('Movies component will mount');
  }

  componentDidMount() { 
    this.search(this.props.search);
    console.log('Movies component did mount');
  }

  componentWillUnmount() {
    console.log('Movies component will unmount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Movies component should update');
  //   return this.state.loading !== nextState.loading
  //     || this.state.movies !== nextState.movies
  //     || this.props.search !== nextProps.search;
  // }

  componentWillReceiveProps({ search }) {
    console.log('Movies component will receive props');
    if(search !== this.props.search) this.search(search);
  }

  search(search) {
    this.setState({
      loading: true
    });

    movieApi
      .search(search)
      .then(movies => {
        console.log('GOT MOVIES!')
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
    console.log('Movies component render');

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
        <Search search={this.props.search} onSearch={this.props.onSearch} />
        {display}
      </div>  
    );
  }
}

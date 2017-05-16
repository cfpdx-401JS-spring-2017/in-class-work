import React, { Component } from 'react';

class MovieApp extends Component {
    constructor() {
        super();
        
        this.state = {
            loading: true,
            movies: []
        };
      
    }

    componentDidMount() {
        this.search('Star Wars');
    }

    search(title) {
        this.setState({
            loading: true,
            movies: []
        });
        fetch(`http://www.omdbapi.com/?s=${encodeURI(title)}&plot=short&r=json`)
            .then(res => res.json())
            .then(data => data.Search)
            .then(movies => {
                this.setState({
                    movies,
                    loading: false
                });
            });
    }

    render() {
        // main render function for whole App

        return (
            <div>
                <h2>Star Wars Movies</h2>
                { this.state.loading ? <div>Loading...</div> : null }
                <ul>
                    {this.state.movies.map((movie, i) => <li key={i}>
                        <img src={movie.Poster}/>
                        {movie.Title}
                    </li>)}
                </ul>
                <div>
                    <form onSubmit={event => {
                        event.preventDefault();
                        this.search(event.target.elements.search.value);
                    }}>
                        <label>Title: <input name="search"/></label>
                        <button type="submit">Search</button> 
                    </form>
                </div>
            </div>
        );
    }
}


export default MovieApp;

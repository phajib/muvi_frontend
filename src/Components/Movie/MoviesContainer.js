import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieCard from './MovieCard';

export class MoviesContainer extends Component {
  render() {
    // const { movies } = this.props;    // destructuring
    const { page, results } = this.props.movies;    // destructuring

    let content = '';
    // content = movies.page > 0 ? movies.results.map((movie, index) => 
    // movies-->page:1          map through movies-->results-->into movies
    content = page > 0 ? results.map((movie, index) =>  // mapping through to get the movie item & it's index.
      ( <MovieCard key={index} movie={movie} /> )) : null;  // mapped movie item is passed to MovieCard component as props.

    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  // movies: from the state.
  // parent state object -> movies.movies <- w/ all our states, what is needed.
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesContainer);

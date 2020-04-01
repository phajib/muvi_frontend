import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieCard from './MovieCard';

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    
    let content = '';
    // movies-->page:1          map through movies-->results-->into movies
    content = movies.page > 0 ? movies.results.map((movie, index) => 
      ( <MovieCard key={index} movie={movie} /> )) : null;

    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesContainer);

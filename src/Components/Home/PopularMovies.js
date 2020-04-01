import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieCard from '../Movie/MovieCard';


export class PopularMovies extends Component {
  render() {
    const { movies } = this.props;

    let content = '';
    content = movies.popularMovies > 0 ? movies.popularMovies.slice(0, 5).map((movie, index) => 
      (<MovieCard key={index} movie={movie} />)) : null;

    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(PopularMovies);

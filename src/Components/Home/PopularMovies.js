import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieSampleCard from '../Movie/MovieCard';


export class PopularMovies extends Component {
  render() {
    const { movies } = this.props;

    let content = '';
    content = movies.length > 0 ? movies.map((movie, index) => 
      (<MovieSampleCard key={index} movie={movie} />)) : null;

      return (
      <>
        <h2 className="animated bounceIn">Popular Movies</h2>
        <div className="row center-block rounded animated fadeIn">{content}</div>
      </>
      )
  }
}

const mapStateToProps = state => ({
  movies: state.movies.popularMovies
});

export default connect(mapStateToProps)(PopularMovies);

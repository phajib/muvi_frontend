import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieSampleCard from '../Movie/MovieCard';


export class LatestMovies extends Component {
  render() {
    const { movies } = this.props;

    let coming_soon = <div className="container text-center"><h3>COMING SOON</h3></div>
    let content = '';
    content = movies > 0 ? movies.map((movie, index) => 
      (<MovieSampleCard key={index} movie={movie} />)) : coming_soon;

    return (
      <>
        <h2 className="animated bounceIn">Latest Movies</h2>
        <div className="row center-block rounded animated fadeIn">{content}</div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies.LatestMovies
});

export default connect(mapStateToProps)(LatestMovies);

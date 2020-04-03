import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieSampleCard from '../Movie/MovieCard';

export class UpcomingMovies extends Component {
  render() {
    const { movies } = this.props;

    let content = '';
    content = movies.length > 0 ? movies.map((movies, index) => 
      (<MovieSampleCard key={index} movie={movies}/>)) : null;

    return (
        <>
        <h2 className="text-success animated bounceIn">Up Coming Movies</h2>
        <div className="row center-block rounded animated fadeIn">{content}</div>
        </>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies.upcomingMovies
});

export default connect(mapStateToProps)(UpcomingMovies);

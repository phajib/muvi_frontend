import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import MoviesContainer from '../Movie/MoviesContainer';
import Spinner from '../layout/Spinner';
import PopularMovies from './PopularMovies'
import TopRatedMovies from './TopRatedMovies';

export class Landing extends Component {
  render() {
    const { loading } = this.props; //take out loading from props
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Spinner /> : <MoviesContainer />}

        <div className="container">
          <div className="row">
            <div className="col-sm">
              <PopularMovies />
            </div>
            <div className="col-sm">
              <TopRatedMovies />
            </div>

          </div>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Landing);


import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import MoviesContainer from '../Movie/MoviesContainer';
import Spinner from '../layout/Spinner';
import PopularMovies from './PopularMovies'
import TopRatedMovies from './TopRatedMovies';

import { fetchPopular, fetchTopRated } from '../../actions/movieActions'


export class Landing extends Component {
  componentDidMount() {
    this.props.fetchPopular()
    this.props.fetchTopRated()
  }

  render() {
    const { loading } = this.props; //take out loading from props
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Spinner /> : <MoviesContainer />}

        <div className="container">
          <div className="row">
            <div className="col-sm">
              Popular Movies
              <PopularMovies />
              {/* {loading ? <Spinner /> : <MoviesContainer />} */}
            </div>
            <div className="col-sm">
              Top Rated Movies
              <TopRatedMovies />
              {/* {loading ? <Spinner /> : <MoviesContainer />} */}
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPopular: () => {dispatch(fetchPopular())},
    fetchTopRated: () => {dispatch(fetchTopRated())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);


import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import MoviesContainer from '../Movie/MoviesContainer';
import Spinner from '../layout/Spinner';
// import PopularMovies from './PopularMovies'
import UpcomingMovies from './UpcomingMovies'
// import TopRatedMovies from './TopRatedMovies';
// import { LatestMovies } from './LatestMovies';

import { fetchPopular, fetchUpcoming, fetchTopRated, fetchLatest } from '../../actions/movieActions'


export class Landing extends Component {
  componentDidMount() {
    this.props.fetchPopular()
    this.props.fetchUpcoming()
    this.props.fetchTopRated()
    this.props.fetchLatest()
  }

  render() {
    const { loading } = this.props; //take out loading from props
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Spinner /> : <MoviesContainer />}

        <div className="container">
          <div className="row">
            {/* <div className="col-sm">
              <LatestMovies />
              {loading ? <Spinner /> : <MoviesContainer />}
            </div> */}
            <div className="col-sm">
              <UpcomingMovies />
              {loading ? <Spinner /> : <MoviesContainer />}
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
    fetchUpcoming: () => {dispatch(fetchUpcoming())},
    fetchTopRated: () => {dispatch(fetchTopRated())},
    fetchLatest: () => {dispatch(fetchLatest())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);


import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../../actions/movieActions';

export class SearchForm extends Component {
  // send text to state
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text); // use action as props
    this.props.setLoading();
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-2 text-center">
        <div className="container">
          <h1 className="display-5 mb-5 animated bounceIn">
            <i className="fa fa-search animated bounceIn" /> Search for a movie...
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              className="form-control my-2 text-success"
              name="searchText"
              type="search"
              placeholder="Search Movies..."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-outline-success my-2 my-sm-0 animated jackInTheBox">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // pulled out text from the state
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);

import React, { Component } from 'react';

// In order to use a state inside a component when you have redux, use connect.
// Connect your component with the states of the redux.
import { connect } from 'react-redux';

import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../../actions/movieActions';

export class SearchForm extends Component {

  // Send text to state
  // Take the value of the input & set this value & use it
  // in our searchMovies action.
  // In order to use this action or any action the Component
  // defines this action as a props, for this Component.
  // Whenever the value of the input changes, the state of text,
  // will take the value of any input.
  onChange = event => {
    this.props.searchMovie(event.target.value);   // searchMovie action which takes a text parameter.
  };

  onSubmit = event => {
    // preventDefault, cancels the event if it is cancelable, meaning that the 
    // default action that belongs to the event will not occur. - w3schools
    event.preventDefault();
    this.props.fetchMovies(this.props.text); // use action as props
    this.props.setLoading();
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-2 text-center animated fadeIn">
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

// destructuring
const mapStateToProps = state => ({
  // state, is our global state object that contains all the states in the application
  // movies, contains reducers
  text: state.movies.text   // pull out text from the state
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);

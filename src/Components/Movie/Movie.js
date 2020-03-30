import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import CommentForm from '../Comments/CommentForm'
import MovieComments from '../Movie/MovieComments'

import { fetchMovie, setLoading } from '../../actions/movieActions'

import Spinner from '../layout/Spinner'

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props; //destructuring
    let movieBackdrop = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`

    let movieInfo = (
      <div style={{backgroundImage: `url(${movieBackdrop})`}}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 card card-body">
              <img src={movie.poster_path} className="thumbnail" alt="Poster" />
            </div>
            <div className="col-md-8">
              <h2 className="mb-4">{movie.title}</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Overview:</strong> {movie.overview}
                </li>
                <li className="list-group-item">
                  <strong>Genre:</strong> {movie.genre}
                </li>
                <li className="list-group-item">
                  <strong>Released:</strong> {movie.realease_date}
                </li>
                <li className="list-group-item">
                  <strong>Average Rating:</strong> {movie.vote_average}
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="card card-body bg-dark my-5 text-light">
              <div className="col-md-12">
                <h3>About</h3>
                {movie.overview}
                <hr />
                <a
                  href={'https://www.imdb.com/title/' + movie.imdbID}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View on IMDB
                </a>

                <Link to="/" className="btn btn-default text-light">
                  Go Back To Search
                </Link>
              </div>
            </div>
          </div>
          <button onClick={() => {this.props.addToList(this.props.movie)} } to='/movies'>
            Save Movie
          </button>
          
          <div className="comments five wide column">
            <CommentForm movie={this.props.movie} newCommentAdded={this.props.newCommnetAdded} addComment={this.props.addComment} /> 
            <MovieComments movieComments={this.props.movieComments} deleteComment={this.props.deleteComment} classes="" mycomments={false} user={this.props.user}/>
          </div>
        </div>
      </div>
    );

    let content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie);

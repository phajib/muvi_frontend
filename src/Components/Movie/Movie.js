import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import Comments from '../Comments/Comments'
// eslint-disable-next-line
import CommentsContainer from '../Comments/CommentsContainer'

// eslint-disable-next-line
// import MovieComments from '../Movie/MovieComments'
import { fetchMovie, setLoading } from '../../actions/movieActions'
// import { deleteComment } from '../../actions/commentActions'

import Swal from 'sweetalert2'
import Spinner from '../layout/Spinner'
// debugger
export class Movie extends Component {
  constructor() {
    super()

    this.state = {
      showMovie: {}
    }
  }

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
    // this.setState({ showMovie: this.props.movie });
    // this.props.fetchMovieComments(this.props.match.params.id);
  }

  // saveMovie = (movieObj, user) => {
  //   this.props.addToList(movieObj, user)
  // }
  addToList = (movieObj) => {
    fetch(`http://localhost:3001/api/v1/usermovies`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
        "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        movie: movieObj,
        user: this.props.users
      })
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.original_title) {
        this.setState(mov => {
          return {myMovies: [...mov.myMovies, data]}}) }
      data.message ? (
        Swal.fire({
          icon: 'error',
          title: 'Unable to Add',
          text: `${data.message}`
      })
      ) : (
        Swal.fire({
          icon: 'success',
          title: 'Added',
          text: `${data.original_title} has been added!`
        })
      )
    })
  }

  render() {
    const { loading, movie } = this.props; //destructuring
    const { genres, } = this.props.movie
    let movieBackdrop = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`

    let movieInfo = (
      <div style={{backgroundImage: `url(${movieBackdrop})`}}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 card card-body">
              <img src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path} className="thumbnail" alt="Poster" />
            </div>
            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item bg-dark text-white">
                  <h2 className="mb-4 text-white">{movie.title}</h2>
                  <strong>Overview:</strong> {movie.overview}
                  <h3 className="text-white">{movie.tagline}</h3>
                  <div className="container">
                    <button onClick={() => {this.addToList(this.props.movie)} } to='/movies' className="btn btn-success btn-sm">
                      Save Movie
                    </button>
                  </div>
                </li>
                <li className="list-group-item bg-dark text-white">
                  {genres && <p className="details">
                    <strong>Genres</strong>
                    <br></br>
                    <span className="detailSpan">{genres.map(gen => gen.name).join(", ")} </span></p>}
                  <strong>Released:</strong> {movie.release_date} <br></br>
                  <strong>Average Rating:</strong> {movie.vote_average} <br></br>
                </li>
                <li className="list-group-item bg-dark text-white">  
                  <a
                    href={'https://www.imdb.com/title/' + movie.imdb_id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success btn-sm"
                  >
                    View on IMDB
                  </a>
                  <Link to="/" className="btn btn-default btn-sm text-success">
                    Go Back To Search
                  </Link>
                </li>
                <li>
                  <CommentsContainer showMovie={this.props.movie} />
                    {/* movie={this.props.movie}
                    newCommentAdded={this.props.newCommentAdded}
                    addComment={this.props.addComment} */}
                  {/* <div className="container">
                    {userMovies.length === 0 ? 
                      <h3>No comments have been made, yet!</h3>
                    : ( userMovies.map(comments => {
                      return <Comments key={comments.id} comments={comments} deleteComment={this.deleteComment} />
                      })
                    )}
                  </div> */}
                  {/* <MovieComments
                    movieComments={this.props.movieComments}
                    deleteComment={this.props.deleteComment}
                    classes="" mycomments={false}
                    user={this.props.users} */}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );

    let content = loading ? <Spinner /> : movieInfo;
    console.log(this.props.movies)
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie);

import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

// eslint-disable-next-line
import CommentsContainer from '../Comments/CommentsContainer'
import Spinner from '../layout/Spinner'

// eslint-disable-next-line
import { fetchMovie, setLoading } from '../../actions/movieActions'

import Swal from 'sweetalert2'
import { Button, Icon } from 'semantic-ui-react'

import '../../App.css'

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
  }

  saveMovie = (movieObj) => {
    fetch(`http://localhost:3001/api/v1/usermovies`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        movie: movieObj,
        user: this.props.user // user not getting carried through
      })
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        if (data.title) {
          this.setState(mov => {
            return { userMovies: [...mov.userMovies, data] }
          })
        }
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
              text: `${data.title} has been saved to your list.`
            })
          )
      })
  }

  render() {
    const { loading, movie } = this.props; //destructuring
    const { genres, production_companies } = this.props.movie
    let movieBackdrop = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`

    let movieInfo = (
      <div>
        <div className="poster-bg" style={{ backgroundImage: `url(${movieBackdrop})` }}>
          <h1 className="title overview text-white" >{movie.title || movie.original_title}</h1>
          <p className="overview text-white">{movie.overview}</p>
          <i className="overview text-white">"{movie.tagline}"</i>
          <div className="col-md-8 muvi-info">
            {genres &&
              <p className="">
                <b className="text-success">Genres: </b>
                {genres.map(gen => gen.name).join(", ")}<br></br>
              </p>
            }
            {production_companies && <p><b className="text-success">Production Companies</b><br></br><span className="">{production_companies.map(com => com.name).join(", ")}</span></p>}
            <b className="text-success">Released:</b> {movie.release_date} <br></br>
            <b className="text-success">Average Rating:</b> {movie.vote_average} <br></br>
          </div>
        </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <ul className="list-group">
                  <li className="list-group-item bg-white text-white">
                    <div className="col-md-12">
                      <Button animated='vertical' onClick={() => { this.saveMovie(movie) }} to='/movies'>
                        <Button.Content hidden>SAVE</Button.Content>
                        <Button.Content visible>
                          <Button icon='heart' />
                        </Button.Content>
                      </Button>

                      <Button animated='vertical' href={'https://www.imdb.com/title/' + movie.imdb_id} target="_blank" rel="noopener noreferrer">
                        <Button.Content hidden>IMDB</Button.Content>
                        <Button.Content visible >
                          <Button icon="imdb" />
                        </Button.Content>
                      </Button>

                      <Button animated='vertical' href="/">
                        <Button.Content hidden>Search</Button.Content>
                        <Button.Content visible>
                          <Button icon="search" />
                        </Button.Content>
                      </Button>
                    </div>
                    <CommentsContainer showMovie={this.props.movie} />
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <img src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path} className="thumbnail" alt="Poster" />
                {/* <Button icon="play" href={'https://api.themoviedb.org/3/movie/' + movie.id + '/videos?api_key=' + MUVI_API_KEY} /> */}
              </div>
            </div>
          </div>
        {/* <MovieComments movieComments={this.props.movieComments} deleteComment={this.props.deleteComment} classes="" mycomments={false} user={this.props.users} /> */}
      </div>
    );

    console.log(this.props.movies)
    console.log(this.state.userMovies)
    let content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
  savedMovies: state.userMovies
});

export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie);

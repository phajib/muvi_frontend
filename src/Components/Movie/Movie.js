import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Icon, Segment, Grid, Dropdown } from 'semantic-ui-react'
import Swal from 'sweetalert2'

import CommentsContainer from '../Comments/CommentsContainer'
// eslint-disable-next-line
import { fetchMovie, fetchRecommendations, setLoading } from '../../actions/movieActions'
import Spinner from '../layout/Spinner'
import '../../App.css'
// eslint-disable-next-line
import { Recommendations } from '../Home/Recommendations'
import { HOST_URL, IMAGE_URL, MOVIE_IMAGE, BACKDROP_SIZE, IMDB_PATH, YOUTUBE_PATH } from '../../../src/config'

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    // this.props.fetchRecommendations(this.props.match.params.id)
    this.props.setLoading();
  }

  saveMovie = (movieObj) => {
    fetch(`${HOST_URL}/usermovies`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        movie: movieObj,
        // user_id: this.props.user.data.id
      })
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        data.message ? (
          Swal.fire({
            icon: 'error',
            title: 'Unable to Save',
            text: `${data.message}`
          })
        ) : (
            Swal.fire({
              icon: 'success',
              title: 'Added',
              text: `${data.original_title} has been saved to your list.`
            })
          )
      })
  }

  render() {
    const { loading, movie } = this.props; //destructuring
    const { genres, directors, production_companies, videos } = this.props.movie

    let movieBackdrop = `${IMAGE_URL}/${BACKDROP_SIZE}${movie.backdrop_path}`

    let movieInfo = (
      <div className="bg-dark">
        <div className="poster-bg" style={{ backgroundImage: `url(${movieBackdrop})` }}>
          <div className="over">
            <h1 className="title overview text-white" >{movie.title || movie.original_title}</h1>
            <p className="overview text-white">{movie.overview}</p>
            <i className="overview text-white"><b>{movie.tagline}</b></i>
          </div>
        </div>
        <Segment.Group className="bg-dark">
          <Grid columns={2} className="muvi_content">
            <Grid.Column className="muvi_content_thumb">
              {/* <Segment basic> */}
                <img src={`${IMAGE_URL}/${MOVIE_IMAGE}/` + movie.poster_path} className="thumbnail" alt="Poster" />
              {/* </Segment> */}
            </Grid.Column>

            <Grid.Column>
              {/* <Segment basic> */}
                <div className="col-md-8 muvi-info">
                  {directors &&
                    <p><b className="text-success">Director/s: </b>
                      {directors.map(dir => directors.name).join(", ")}<br /><br />
                    </p>
                  }

                  {production_companies && <p><b className="text-success">Production Companies</b><br></br><span className="">{production_companies.map(com => com.name).join(", ")}</span></p>}
                  <b className="text-success">Released:</b> {movie.release_date} <br /><br />
                  <b className="text-success">Average Rating:</b>
                  <meter min="0" max="100" optimum="100" low="40" high="70" value={movie.vote_average * 10} />{movie.vote_average}<br /><br />
                  <b className="text-success">Runtime:</b> {movie.runtime}mins
                  {genres &&
                    <p><b className="text-success">Genres: </b>
                      {genres.map(gen => gen.name).join(", ")}<br></br>
                    </p>
                  }
                </div>
              {/* </Segment> */}
            </Grid.Column>
          </Grid>

          <Button.Group size='large' basic inverted color='green'>
            <Button animated='vertical' onClick={() => { this.saveMovie(movie) }}>
              <Button.Content hidden>SAVE</Button.Content>
              <Button.Content visible>
                <Icon name='heart' />
              </Button.Content>
            </Button>
            <Button animated='vertical' href={`${IMDB_PATH}` + movie.imdb_id} target="_blank" rel="noopener noreferrer">
              <Button.Content hidden>IMDB</Button.Content>
              <Button.Content visible >
                <Icon name="imdb" />
              </Button.Content>
            </Button>
            <Button animated='vertical' href="/">
              <Button.Content hidden>Search</Button.Content>
              <Button.Content visible>
                <Icon name="search" />
              </Button.Content>
            </Button>
            <Dropdown className='icon' icon='film' button simple options={
              videos && videos.results.map(vid => {
                return (
                  <div className="bg-dark">
                    <Button animated='vertical'
                      href={`${YOUTUBE_PATH}` + vid.key}
                      target='_blank'
                      className="bg-dark"
                      rel='noopener noreferrer' >
                      <Button.Content hidden icon="film"><Icon name='film' /></Button.Content>
                      <Button.Content visible><Icon name="play" /></Button.Content>
                    </Button>
                  </div>
                )
              })}
            />
          </Button.Group>
          <br /><br />
          <CommentsContainer movieObj={this.props.movie} />
        </Segment.Group>
      </div>
    );

    let content = loading ? <Spinner /> : movieInfo;
    return <div className="bg-dark">{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
  recommendations: state.recommendations,
  savedMovies: state.userMovies,
  user: state.users,
});

export default connect(mapStateToProps, { fetchMovie, fetchRecommendations, setLoading })(Movie);

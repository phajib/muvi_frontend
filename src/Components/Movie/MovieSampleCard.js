// import React, { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { IMDB_PATH } from '../../../src/config'
// import ReactImageFallback from 'react-image-fallback'
// export class MovieCard extends Component {
  function MovieCard ({movie}) {

  
  // render() {
    // const { movie } = this.props;
    return (
      <div className="col-md-3 center-block mb-5 animated zoomIn">
        <div className="card border-0 rounded">

          <Link to={'/movie/' + movie.tmdb_id}>
            {/* <ReactImageFallback */}
            <img
              src={`${IMDB_PATH}` + movie.poster_path}
              // fallbackImage='https://i.pinimg.com/originals/b7/41/bd/b741bd5da3e33944ab9432e9e0923822.gif'
              alt="Poster Coming Soon"
              className="card-img-top" />
          </Link>
        </div>
      </div>
    );
  }
// }

export default MovieCard;

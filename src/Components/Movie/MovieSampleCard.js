import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactImageFallback from 'react-image-fallback'
export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 center-block mb-5 animated zoomIn">
        <div className="card border-0 rounded">

          <Link to={'/movie/' + movie.tmdb_id}>
            <ReactImageFallback
              src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path}
              fallbackImage='https://i.pinimg.com/originals/b7/41/bd/b741bd5da3e33944ab9432e9e0923822.gif'
              alt="Poster Coming Soon"
              className="card-img-top" />
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;

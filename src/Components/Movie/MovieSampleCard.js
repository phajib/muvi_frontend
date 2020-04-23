import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 center-block mb-5 animated zoomIn">
        <div className="card border-0 rounded">
          <Link to={'/movie/' + movie.tmdb_id}>
            <img className="card-img-top"
              src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path}
              alt="Poster Coming Soon" />
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;

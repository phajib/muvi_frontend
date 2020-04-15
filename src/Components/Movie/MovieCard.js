import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div className="col-md-3 center-block mb-5">
        <div className="card border-0 rounded">
          <Link to={'/movie/' + movie.id}>
            <img className="card-img-top"
              src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
              alt="Poster Coming Soon" />
          </Link>
          <div className="card-body bg-dark">
            <p className="card-text text-white">
              <b>{movie.original_title}</b> - <i>{movie.release_date}</i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;

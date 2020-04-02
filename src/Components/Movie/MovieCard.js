import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    
    return (
      <div className="col-md-3 center-block mb-5">
        <div className="card card-body bg-secondary text-center h-100 center-block">
          <Link to={'/movie/' + movie.id}>
            <img className="w-100 mb-2" 
            src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
            alt="No Poster"/>
          </Link>
          <h4 className="text-light card-title">
            {movie.title} - {movie.release_date}
          </h4>
        </div>
      </div>
    );
  }
}

export default MovieCard;

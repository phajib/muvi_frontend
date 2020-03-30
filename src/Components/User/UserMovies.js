import React from 'react';
import MovieCard from '../Movie/MovieCard'

const UserMovies = (props) => {
    return (
      <div className="usermovies eight wide column animated zoomIn">
        <div className="usermovies">
            <h1>Your Movie List</h1>
            {this.props.userMovies.map(movie => {
                return <MovieCard key={movie.id} movie={movie} />
            })
            }
        </div>
    </div>
    )
}

export default UserMovies
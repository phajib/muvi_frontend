import React from "react";

// import MovieCard from './MovieCard'

class TopRatedMovies extends React.Component{
    render(){
        return (
            <div className="featured-container animated bounceIn">
                <div className="featured-header">
                    <h1 className="featured-text is-size-1">Top Rated Movies</h1>
                </div>
                <div className="popular-movies text-center">
                    {/* {this.props.fetchPopular.slice(0,3).map(movie => <MovieCard key={movie.id} movieObject={movie} />)} */}
                </div>
            </div>
        )
    }
}

export default TopRatedMovies 
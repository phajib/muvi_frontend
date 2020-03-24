import React from 'react'
import Poster from '../Poster/Poster'

function PopularContainer(props) {
    return (
        <div className="PopularContainer homeRow">
            <p className="rowTitle">Popular Movies</p>
            <div className="rowContainer">
                {props.popularMovies.slice(0,6).map(movie => 
                    <Poster key={movie.id} movie={movie} classes="posterImg poster-glow" />
                )}
            </div>
        </div>
    )
}

export default PopularContainer

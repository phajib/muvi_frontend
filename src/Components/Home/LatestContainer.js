import React from 'react'
import Poster from '../Poster/Poster'

function LatestContainer(props) {
    return (
        <div className="LatestContainer homeRow">
            <p className="rowTitle">Latest Movies</p>
            <div className="rowContainer">
                {props.latestMovies.slice(0,6).map(movie => 
                    <Poster key={movie.id} movie={movie} classes="posterImg poster-glow" />
                )}
            </div>
        </div>
    )
}

export default LatestContainer

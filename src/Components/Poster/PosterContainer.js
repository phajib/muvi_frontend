import React from 'react'
import Poster from './Poster'

export default function PosterContainer(props) {
    return (
        <div>
            <video autoPlay muted loop id="video">
                <source src="https://www.videvo.net/videvo_files/converted/2014_12/preview/007.mp490267.webm" type="video/mp4" />
                <source src="https://www.videvo.net/videvo_files/converted/2014_12/preview/007.mp490267.webm" type="video/webm" />
            </video>
            <div className="posters">
                {props.allMovies.slice(10, 16).map(movie =>
                    <Poster classes="posterImg" key={movie.id} movie={movie} />
                )}
            </div>
        </div>
    )
}

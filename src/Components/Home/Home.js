import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Home/Home'
import PosterContainer from '../Poster/PosterContainer'
import LatestContainer from '../Home/LatestContainer'
import PopularContainer from '../Home/PopularContainer'

class Home extends React.Component {
    render () {
        return (
            <div>
                {/* Check to see if user is logged in to adjust NavBar options. Logged in: Profile */}
                <div className="homeButtons">
                    <Link className="item ui inverted yellow button" to="/movies" />Movies
                    {!Array.isArray(this.props.currentUser) ? <Link className="item ui inverted yellow button" to="/profile">Profile</Link> : <Link className="item ui inverted yellow button" to="/login">Login</Link>}
                    <Link className="item ui inverted yellow button" to="/about">About</Link>
                </div>
                <Header />
                {/* Add Carousel of latest movies maybe later and replace PosterContainer */}
                <PosterContainer allMovies={this.props.allMovies} />
                <LatestContainer latestMovies={this.props.latestMovies} />
                <PopularContainer popularMovies={this.props.popularMovies} />
            </div>
        )
    }
}

export default Home
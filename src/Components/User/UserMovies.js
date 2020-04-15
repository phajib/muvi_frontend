import React, { Component } from 'react'
import { connect } from 'react-redux'

import { userData } from '../../actions/usersActions'
// eslint-disable-next-line
import MovieCard from '../Movie/MovieCard'
import MovieSampleCard from '../Movie/MovieSampleCard'

// debugger
class UserMovies extends Component {
    componentDidMount() {
        this.props.userData()
    }

    render() {
        console.log(this.props.userMovies)
        return (
            <>
                <h2 className="text-success">Your Movie List</h2>
                <div className="row animated zoomIn">

                    {this.props.userMovies.map(movie => {
                        // return <MovieCard key={movie.id} movie={movie} users={this.props.users}/>
                        return <MovieSampleCard key={movie.id} movie={movie} />
                    })}

                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        userMovies: state.userMovies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userData: () => { dispatch(userData()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMovies)

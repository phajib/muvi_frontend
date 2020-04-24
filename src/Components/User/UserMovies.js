import React, { Component } from 'react'
import { connect } from 'react-redux'

import { userData } from '../../actions/usersActions'

import MovieSampleCard from '../Movie/MovieSampleCard'

class UserMovies extends Component {
    componentDidMount() {
        // this.props.userData()
    }

    render() {
        return (
            <div>
                <h2 className="text-success">Your Movie List</h2>
                <div className="row">
                    {this.props.savedMovies.map(movie => {
                        return <MovieSampleCard key={movie.id} movie={movie} />
                    })}
                </div>
            </div>
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
// export default UserMovies

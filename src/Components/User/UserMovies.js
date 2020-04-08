import React, {Component} from 'react'
import { connect } from 'react-redux'

// eslint-disable-next-line
import { userData } from '../../actions/usersActions'
import MovieCard from '../Movie/MovieCard'

// debugger
class UserMovies extends Component {
    componentDidMount(){
        this.props.userData()
    }

    render() {
        console.log(this.props.userMovies)
        return (
            <div className="container animated zoomIn">
                <div className="container">
                    <h2 className="text-success">Your Movie List</h2>
                    {this.props.savedMovies.map(movie => {
                        return <MovieCard key={movie.id} movie={movie} users={this.props.users}/>
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
        userData: () => {dispatch(userData())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMovies)
// export default UserMovies




// import React from 'react'
// import MovieCard from '../Movie/MovieCard'

// const UserMovies = (props) => {
//     return (
//       <div className="usermovies eight wide column animated zoomIn">
//         <div className="usermovies">
//             <h3 className="text-success">Your Movie List</h3>
//             {props.userMovies.map(movie => {
//                 return <MovieCard key={movie.id} movie={movie} />
//             })
//             }
//         </div>
//     </div>
//     )
// }

// export default UserMovies
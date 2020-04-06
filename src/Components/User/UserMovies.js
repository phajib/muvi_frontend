// import React, {Component} from 'react'

// import MovieCard from '../Movie/MovieCard'

// class UserMovies extends Component {
//     render() {
//         return (
//             <div className="container eight wide column animated zoomIn">
//                 <div className="container">
//                     <h3 className="text-success">Your Movie List</h3>
//                     {this.props.userMovies.map(movie => {
//                         return <MovieCard key={movie.id} movie={movie} />
//                     })}
//                 </div>
//             </div>
//         )
//     }
// }

// export default UserMovies

import React from 'react'
import MovieCard from '../Movie/MovieCard'

const UserMovies = (props) => {
    return (
      <div className="usermovies eight wide column animated zoomIn">
        <div className="usermovies">
            <h3 className="text-success">Your Movie List</h3>
            {props.userMovies.map(movie => {
                return <MovieCard key={movie.id} movie={movie} />
            })
            }
        </div>
    </div>
    )
}

export default UserMovies
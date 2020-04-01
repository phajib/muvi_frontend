import React, { Component } from 'react';
import { connect } from 'react-redux';

import MoviesCard from '../Movie/MoviesContainer';

export class TopRatedMovies extends Component {
  render() {
    const { movies } = this.props;

    let content = '';
    content = movies.topRatedMovies > 0 ? movies.topRatedMovies.slice(0,5).map((movie, index) => 
      (<MoviesCard key={index} movie={movie} />)) : null;

    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(TopRatedMovies);



// export class TopRatedMovies extends Component { 
//   state = {
//     topRatedMovies: []
//   }

//   componentDidMount() {
//     fetchTopRated()
//     // fetch('http://localhost:3001/api/v1/top_rated')
//     // .then(response => response.json())
//     // .then(({results}) => {this.setState({topRatedMovies: results})})
//   }

//   render() {
//       return (
//         <div className="topRatedMovies">
//           <h3>Top Rated Movies</h3>
//           <MoviesContainer />
//         </div>
//       )
    
    
//       // let content = '';
//       // content = topRatedMovies.slice(0, 3).map((movie, index) => 
//       // (<MovieCard key={index} movie={movie} />)) : null;
      
//       // return <div className="row">{content}</div>;
//   }
// }
// export default TopRatedMovies



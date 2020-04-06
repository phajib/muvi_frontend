import axios from 'axios';
// import Swal from 'sweetalert2'

let HOST_URL = "http://localhost:3001/api/v1"

export const setLoading = () => {
  return {
    type: 'LOADING'
  };
};

//-----------MOVIES--------------------
export const searchMovie = text => dispatch => {
  dispatch({
    type: 'SEARCH_MOVIE',
    payload: text
  });
};

export const fetchMovies = text => dispatch => {
  axios.get(`${HOST_URL}/search/${text}`)
    .then(response => {
      dispatch({ type: 'FETCH_MOVIES', payload: response.data, })
    })
    .catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
  axios.get(`${HOST_URL}/movie/${id}`)
  // fetch(`${HOST_URL}/movie/${id}`)
    // .then(res => res.json())
    .then(response => {
      dispatch({ type: 'FETCH_MOVIE', payload: response.data })
    })
    .catch(err => console.log(err));
  };
  
export const fetchUpcoming = () => {
  return (dispatch) => {
  fetch(`${HOST_URL}/upcoming`)
    .then(resp => resp.json())
    .then(result => {
      dispatch({ type: 'FETCH_UPCOMING', payload: result })
    })
  }
};

export const fetchTopRated = () => {
  return (dispatch) => {
    fetch(`${HOST_URL}/top_rated`)
      .then(resp => resp.json())
      .then(result => {
       dispatch({ type: 'FETCH_TOP_RATED', payload: result })
    })
  }
}

export const fetchPopular = () => {
  return (dispatch) => {
    fetch(`${HOST_URL}/popular/1`)
      .then(resp => resp.json())
      .then(result => {
        dispatch({ type: 'FETCH_POPULAR', payload: result })
    })
  }
}

export const fetchLatest = () => {
  return (dispatch) => {
    fetch(`${HOST_URL}/latest`)
      .then(resp => resp.json())
      .then(result => {
        dispatch({ type: 'FETCH_LATEST', payload: result })
    })
  }
}

// need to adjust still
// export const userMovies = (user) => dispatch => {
//   axios.post(`${HOST_URL}/usermovies`)
//     .then(response =>
//       dispatch({ type: 'USER_MOVIES',payload: response.data })
//     )
//     .catch(err => console.log(err));
// };

// export const addToList = (movieObj) => {
//   fetch(`${HOST_URL}/usermovies`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//       "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
//     }, 
//     body: JSON.stringify({
//       movie: movieObj,
//       user: movieObj.users
//     })
//   })
//   .then(resp => resp.json())
//   .then(data => {
//     switch(data.message) {
//         case "Already Liked!":
//             Swal.fire({
//                 title: 'Already Liked!',
//                 text: 'Time to watch more movies!',
//                 icon: 'error',
//                 confirmButtonText: 'Back'
//             })
//             break;
//         case "Please log in":
//             Swal.fire({
//                 title: `${data.message}`,
//                 text: 'Login or Signup',
//                 icon: 'error',
//                 confirmButtonText: 'Back'
//             })
//             break;
//         default:
//             Swal.fire({
//                 title: 'Added!',
//                 text: `${data.title} Movie saved`,
//                 icon: 'success',
//                 confirmButtonText: 'OK'
//             })
//     }
// })
// }

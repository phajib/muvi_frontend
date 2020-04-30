import axios from 'axios';
import Swal from 'sweetalert2'

let HOST_URL = "http://localhost:3001/api/v1"

export const setLoading = () => {
  return {
    type: 'LOADING'
  };
};

//-----------MOVIES--------------------
// When something triggered in our app that will dispatch an action.
// Dispatch is accessible via THUNK
// Dispatch is from redux thunk middleware, implemented in the structure of store.
// Dispatch action type and payload, which make the reducer recognize our action.
export const searchMovie = text => dispatch => {
  dispatch({
    type: 'SEARCH_MOVIE', // type is checked in our movieReducer
    payload: text
  });
};

export const fetchMovies = text => dispatch => {
  axios.get(`${HOST_URL}/search/${text}`)
    .then(response => {
      dispatch({ type: 'FETCH_MOVIES', payload: response.data })  // payload is our response containing that data
    })
    .catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
  axios.get(`${HOST_URL}/movie/${id}`)
  // fetch(`${HOST_URL}/movie/${id}`)
    // .then(res => res.json())
    .then(response => {
      // go into the reducer & take this action object and
      // update the redux store based on data being sent.
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

export const saveMovie = (movieObj, users) => dispatch => {
  fetch(`${HOST_URL}/usermovies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
    }, 
    body: JSON.stringify({
      movie: movieObj,
      user: users
    })
  })
  .then(resp => resp.json())
  .then(data => {
    if (data.original_title) {
      this.setState(mov => { 
        return {userMovies: [...mov.userMovies, data]}}) }
      data.message ? (
      Swal.fire({
        icon: 'error',
        title: 'Unable to Add',
        text: `${data.message}`
      })
      ) : (
      Swal.fire({
        icon: 'success',
        title: 'Added',
        text: `${data.original_title} has been added!`
      })
    )
    dispatch({type: 'SAVED_MOVIE', payload: data.movieObj})
    localStorage.setItem("jwt", data.jwt)
  })
}

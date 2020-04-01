import axios from 'axios';
// import Swal from 'sweetalert2'

let HOST_URL = "http://localhost:3001/api/v1"

export const setLoading = () => {
  return {
    type: 'LOADING'
  };
};

//-----------MOVIES--------------------
// export const searchMovie = text => dispatch => {
//   dispatch({ type: 'SEARCH_MOVIE',payload: text })
// }

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
  // fetch(`${HOST_URL}/movie/${tmdb_id}`)
    // .then(res => res.json())
    .then(response => {
      dispatch({ type: 'FETCH_MOVIE', payload: response.data })
    })
    .catch(err => console.log(err));
};

export const fetchUpcoming = dispatch => {
  axios.get(`${HOST_URL}/upcoming`)
    .then(response => {
      dispatch({ type: 'FETCH_UPCOMING', payload: response.data })
    })
    .catch(err => console.log(err));
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

export const fetchLatest = dispatch => {
  axios.get(`${HOST_URL}/latest`)
    // .get(`https://api.themoviedb.org/3/movie/latest?api_key=2c7ac09213443b720c7abaa7b2c0ec29`)
    .then(response => {
      dispatch({ type: 'FETCH_LATEST', payload: response.data })
    })
    .catch(err => console.log(err));
};

// need to adjust still
export const userMovies = (user) => dispatch => {
  axios.post(`${HOST_URL}/usermovies`)
    .then(response =>
      dispatch({ type: 'USER_MOVIES',payload: response.data })
    )
    .catch(err => console.log(err));
};

import axios from 'axios';

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
  axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=2c7ac09213443b720c7abaa7b2c0ec29&query=${text}`)
    // .get(`${HOST_URL}/search/${text}`)
    .then(response =>
      dispatch({
        type: 'FETCH_MOVIES',
        payload: response.data,
      })
    )
    .catch(err => console.log(err));
};

export const fetchMovie = movie_id => dispatch => {
  axios
    .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=2c7ac09213443b720c7abaa7b2c0ec29`)
    // .get(`${HOST_URL}/movie/${movie_id}`)
    .then(response =>
      dispatch({
        type: 'FETCH_MOVIE',
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchUpcoming = dispatch => {
  axios
  // .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=2c7ac09213443b720c7abaa7b2c0ec29`)
    .get(`${HOST_URL}/upcoming`)
    .then(response =>
      dispatch({
        type: 'FETCH_UPCOMING',
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchTopRated = dispatch => {
  axios
  .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=2c7ac09213443b720c7abaa7b2c0ec29`)
    // .get(`${HOST_URL}/top_rated`)
    .then(response =>
      dispatch({
        type: 'FETCH_TOP_RATED',
        payload: response.data
      })
      )
      .catch(err => console.log(err));
    };
    
    export const fetchPopular = dispatch => {
      console.log("Gonna try and fetch popular movies")
      axios
      // .get(`https://api.themoviedb.org/3/movie/popular?api_key=2c7ac09213443b720c7abaa7b2c0ec29&language=en-US&page=1`)
      .get(`${HOST_URL}/popular/1`)
    .then(response =>
      dispatch({
        type: 'FETCH_POPULAR',
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchLatest = dispatch => {
  axios
  // .get(`https://api.themoviedb.org/3/movie/latest?api_key=2c7ac09213443b720c7abaa7b2c0ec29`)
    .get(`${HOST_URL}/latest`)
    .then(response =>
      dispatch({
        type: 'FETCH_LATEST',
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

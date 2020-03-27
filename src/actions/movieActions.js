import { SEARCH_MOVIE, FETCH_MOVIES,
  FETCH_MOVIE, LOADING,
  FETCH_UPCOMING, FETCH_TOP_RATED,
  FETCH_POPULAR, FETCH_LATEST
} from './types';
import axios from 'axios';

// import { APIKey } from '../APIKey';

let HOST_URL = "http://localhost:3001/api/v1"

export const setLoading = () => {
  return {
    type: LOADING
  };
};

//-----------MOVIES--------------------
export const searchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  });
};

export const fetchMovies = text => dispatch => {
  axios
    .get(`${HOST_URL}/search/${text}`)
    // .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
  axios
    // .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .get(`${HOST_URL}/movie/${id}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchUpcoming = dispatch => {
  axios
    .get(`${HOST_URL}/upcoming`)
    .then(response =>
      dispatch({
        type: FETCH_UPCOMING,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchTopRated = dispatch => {
  axios
    .get(`${HOST_URL}/top_rated`)
    .then(response =>
      dispatch({
        type: FETCH_TOP_RATED,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchPopular = dispatch => {
  axios
    .get(`${HOST_URL}/popular/1`)
    .then(response =>
      dispatch({
        type: FETCH_POPULAR,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchLatest = dispatch => {
  axios
    .get(`${HOST_URL}/upcoming`)
    .then(response =>
      dispatch({
        type: FETCH_LATEST,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

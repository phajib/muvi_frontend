import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE,
  LOADING,
  FETCH_UPCOMING,
  FETCH_TOP_RATED,
  FETCH_POPULAR,
  FETCH_LATEST
} from '../actions/types';

const initialState = {
  text: '',
  movies: [],
  loading: false,
  movie: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_UPCOMING:
      return {
        ...state,
        loading: false
      };
    case FETCH_TOP_RATED:
      return {
        ...state,
        loading: false
      };
    case FETCH_POPULAR:
      return {
        ...state,
        loading: false
      };
    case FETCH_LATEST:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

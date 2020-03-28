const initialState = {
  text: '',
  movie: [],
  movies: [],
  loading: false,
  upcomingMovies: [],
  topRatedMovies: [],
  popularMovies: [],
  latestMovies: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_MOVIE':
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case 'FETCH_MOVIES':
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case 'FETCH_MOVIE':
      return {
        ...state,
        movie: action.payload,
        loading: false
      };
    case 'LOADING':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_UPCOMING':
      return {
        ...state,
        upcomingMovies: action.payload,
        loading: false
      };
    case 'FETCH_TOP_RATED':
      return {
        ...state,
        topRatedMovies: action.payload,
        loading: false
      };
    case 'FETCH_POPULAR':
      return {
        ...state,
        popularMovies: action.payload,
        loading: false
      };
    case 'FETCH_LATEST':
      return {
        ...state,
        latestMovies: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

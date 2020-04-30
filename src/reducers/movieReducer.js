const initialState = {
  text: '',       // search string
  movie: [],      // display single movie from TMDB API.
  movies: [],     // search results, json data from TMDB API.
  loading: false, // depending on data that is coming, if data hasn't arrived load spinner, loading: true.
  upcomingMovies: [],
  topRatedMovies: [],
  popularMovies: [],
  latestMovies: [],
};

export default function (state = initialState, action) {
  switch (action.type) {          // check the action.type
    case 'SEARCH_MOVIE':          // type
      return {
        ...state,
        text: action.payload,     // set text state,  which is the input value
        loading: false
      };
    case 'FETCH_MOVIES':
      return {
        ...state,
        movies: action.payload,   // set movies state into the payload
        loading: false
      };
    case 'FETCH_MOVIE':
      return {
        ...state,
        movie: action.payload,    // set movie state into the payload
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
      // to make sure we always return some version of state.
      return state;
  }
}

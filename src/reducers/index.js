// Combining all reducers into one reducer and set it as a single parent state.
import { combineReducers } from 'redux';

// Import application reducers
import movieReducer from './movieReducer';
import userReducer from './userReducer';
import userMoviesReducer from './userMoviesReducer';

export default combineReducers({
  // Parent states
  movies: movieReducer,         // contains all movieReducer states
  users: userReducer,           // contains all userReducer states
  userMovies: userMoviesReducer // contains userMoviesReducer states
});

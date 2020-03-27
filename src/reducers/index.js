import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import commentsReducer from './commentsReducer';
import userReducer from './userReducer';

export default combineReducers({
  movies: movieReducer,
  comments: commentsReducer,
  users: userReducer
});

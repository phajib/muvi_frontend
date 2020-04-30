import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';    // async requests
import logger from 'redux-logger'

// Helps redux-devtools-extension to work. If you aren't applying any middleware
// to use this extension, it will not work.
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const middleware = [thunk, logger];
const initialState = {};

// store is connected, having all the updated states from the reducer
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

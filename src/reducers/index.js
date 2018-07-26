import { combineReducers } from 'redux';
import BookReducer from './reducer-books';

const rootReducer = combineReducers({
  books: BookReducer
});

export default rootReducer;

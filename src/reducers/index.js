import { combineReducers } from 'redux';
import BookReducer from './reducer-books';
import BookActive from './reducer-active-book';

const rootReducer = combineReducers({
  books: BookReducer,
  activeBook: BookActive
});

export default rootReducer;

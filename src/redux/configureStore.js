import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const reducers = combineReducers({
  bookReducer,
  categoryReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;

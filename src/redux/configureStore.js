import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  bookReducer,
  categoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';
import categoriesReducer from './categoriesSlice';

// Combine the reducers into a root reducer
const rootReducer = {
  books: booksReducer,
  categories: categoriesReducer
};

// Create the store using configureStore
const store = configureStore({
  reducer: rootReducer
});

export default store;

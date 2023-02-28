import { createSlice } from '@reduxjs/toolkit';
import initialBooksState from './initialStateSlice';

// Define the books slice
const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooksState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload),
    }),
  },
});

// Export the slice actions
export const { addBook, removeBook } = booksSlice.actions;

// Export the books reducer
export default booksSlice.reducer;

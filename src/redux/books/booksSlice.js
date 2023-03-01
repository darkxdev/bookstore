import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import initialBooksState from './initialStateSlice';

// Create an async thunk to fetch the books data from the API
const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LHtDguTMI5Nwg9HRI1l3/books');
  const booksArr = [];
  Object.keys(response.data).forEach((value) => {
    const responseData = response.data[value][0];
    responseData.item_id = value;
    booksArr.push(responseData);
  });
  return booksArr;
});

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
  extraReducers: {
    [fetchBooks.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [fetchBooks.fulfilled]: (state, action) => ({
      ...state,
      status: 'succeeded',
      books: action.payload,
    }),
    [fetchBooks.rejected]: (state, action) => ({
      ...state,
      status: 'failed',
      error: action.error.message,
    }),
  },
});

// Export the slice actions and the async thunk
export const { addBook, removeBook } = booksSlice.actions;

export { fetchBooks };

// Export the books reducer
export default booksSlice.reducer;

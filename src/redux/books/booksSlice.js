import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import initialBooksState from './initialStateSlice';

// Create an async thunk to fetch the books data from the API
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LHtDguTMI5Nwg9HRI1l3/books');
  const booksArr = [];
  Object.keys(response.data).forEach((value) => {
    const responseData = response.data[value][0];
    responseData.item_id = value;
    booksArr.push(responseData);
  });
  return booksArr;
});

// Create an async thunk to add a new book
export const addBook = createAsyncThunk('books/addBook', async (newBook, { rejectWithValue }) => {
  try {
    // Send a POST request to the Bookstore API to add the new book
    await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LHtDguTMI5Nwg9HRI1l3/books', newBook);

    return newBook;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Create an async thunk to remove a book
export const removeBook = createAsyncThunk('books/removeBook', async (itemId, { rejectWithValue }) => {
  try {
    // Send a DELETE request to the Bookstore API to remove the book with the given ID
    await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LHtDguTMI5Nwg9HRI1l3/books/${itemId}`, {
      data: { item_id: itemId },
    });

    return itemId;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Define the books slice
const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooksState,
  reducers: {},
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
    [addBook.fulfilled]: (state, action) => {
      state.books.push(action.payload);
    },
    [removeBook.fulfilled]: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload),
    }),
    [removeBook.rejected]: () => {
      const errorMessageDiv = document.createElement('div');
      errorMessageDiv.textContent = 'Error';
      document.body.appendChild(errorMessageDiv);
    },
  },
});

// Export the books reducer
export default booksSlice.reducer;

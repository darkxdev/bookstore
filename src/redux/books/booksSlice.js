import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for books
export const initialBooksState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

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

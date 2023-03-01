import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addBook, removeBook, fetchBooks } from '../redux/books/booksSlice';
import DisplayBooks from '../components/displayBooks';

const Books = () => {
  // Get the dispatch function to send actions to the store
  const dispatch = useDispatch();

  // Get the books array from the store state
  const books = useSelector((state) => state.books.books);

  // Fetch books from Bookstore API when the component has rendered
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // Function to handle adding a new book
  const handleAddBook = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input values and create an ID for the new book
    const titleInput = document.querySelector('#titleInput');
    const authorInput = document.querySelector('#authorInput');
    const itemId = `${titleInput.value}_${authorInput.value}`;

    try {
      const newBook = {
        item_id: itemId,
        title: titleInput.value,
        author: authorInput.value,
        category: 'Fiction',
      };

      // Send a POST request to the Bookstore API to add the new book
      await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LHtDguTMI5Nwg9HRI1l3/books', newBook);

      // Dispatch an action to add the new book to the store
      dispatch(addBook(newBook));

      // Clear the input fields
      titleInput.value = '';
      authorInput.value = '';
    } catch (error) {
      const errorMessageDiv = document.createElement('div');
      errorMessageDiv.textContent = 'Error';
      document.body.appendChild(errorMessageDiv);
    }
  };

  // Function to handle removing a book
  const handleRemoveBook = async (itemId) => {
    try {
      // Send a DELETE request to the Bookstore API to remove the book with the given ID
      await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LHtDguTMI5Nwg9HRI1l3/books/${itemId}`, {
        data: { item_id: itemId },
      });

      // Dispatch an action to remove the book with the given ID from the store
      dispatch(removeBook(itemId));
    } catch (error) {
      const errorMessageDiv = document.createElement('div');
      errorMessageDiv.textContent = 'Error';
      document.body.appendChild(errorMessageDiv);
    }
  };

  // Render the component
  return (
    <div>
      <h2>My Book List</h2>
      {/* Render the DisplayBooks component, passing props */}
      <DisplayBooks books={books} handleRemoveBook={handleRemoveBook} />

      {/* Render the form for adding a new book */}
      <form>
        <label htmlFor="titleInput">
          Title:
          <input type="text" name="title" id="titleInput" />
        </label>
        <label htmlFor="authorInput">
          Author:
          <input type="text" name="author" id="authorInput" />
        </label>
        <button type="submit" onClick={handleAddBook}>Add Book</button>
      </form>
    </div>
  );
};

export default Books;

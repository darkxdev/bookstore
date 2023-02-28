import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import DisplayBooks from '../components/displayBooks';

const Books = () => {
  // Get the dispatch function to send actions to the store
  const dispatch = useDispatch();
  
  // Get the books array from the store state
  const books = useSelector((state) => state.books.books);

  // Function to handle adding a new book
  const handleAddBook = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the input values and create an ID for the new book
    const titleInput = document.querySelector('#titleInput');
    const authorInput = document.querySelector('#authorInput');
    const itemId = `${titleInput.value}-${authorInput.value}`;
    
    // Dispatch an action to add the new book to the store
    dispatch(addBook({ item_id: itemId, title: titleInput.value, author: authorInput.value }));
    
    // Clear the input fields
    titleInput.value = '';
    authorInput.value = '';
  };

  // Function to handle removing a book
  const handleRemoveBook = (itemId) => {
    // Dispatch an action to remove the book with the given ID from the store
    dispatch(removeBook(itemId));
  };

  // Render the component
  return (
    <div>
      <h2>My Book List</h2>
      {/* Render the DisplayBooks component, passing in the books array and the handleRemoveBook function */}
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

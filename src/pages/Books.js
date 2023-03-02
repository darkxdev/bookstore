import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

    const newBook = {
      item_id: itemId,
      title: titleInput.value,
      author: authorInput.value,
      category: 'Fiction',
    };

    // Dispatch an action to add the new book to the store
    dispatch(addBook(newBook));

    // Clear the input fields
    titleInput.value = '';
    authorInput.value = '';
  };

  // Function to handle removing a book
  const handleRemoveBook = async (itemId) => {
    // Dispatch an action to remove the book with the given ID from the store
    dispatch(removeBook(itemId));
  };

  // Render the component
  return (
    <div className="main-container">
      {/* Render the DisplayBooks component, passing props */}
      <DisplayBooks books={books} handleRemoveBook={handleRemoveBook} />
      <div className="horizontal-divider" />
      {/* Render the form for adding a new book */}
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form>
        <input type="text" name="title" className="input" id="titleInput" placeholder="Book title" />
        <input type="text" name="author" className="input" id="authorInput" placeholder="Book author" />
        <button type="submit" className="button-form" onClick={handleAddBook}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default Books;

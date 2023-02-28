import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import DisplayBooks from '../components/displayBooks';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const handleAddBook = (event) => {
    event.preventDefault();
    const titleInput = document.querySelector('#titleInput');
    const authorInput = document.querySelector('#authorInput');
    const itemId = `${titleInput.value}-${authorInput.value}`;
    dispatch(addBook({ item_id: itemId, title: titleInput.value, author: authorInput.value }));
    titleInput.value = '';
    authorInput.value = '';
  };

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      <h2>My Book List</h2>
      <DisplayBooks books={books} handleRemoveBook={handleRemoveBook} />

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

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';

const Books = (props) => {
  const { books } = props;
  const dispatch = useDispatch();

  const handleAddBook = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const author = event.target.elements.author.value;
    dispatch(addBook({ title, author }));
  };

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      <h2>My Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={`${book.title}-${book.author}`}>
            <span>{book.title}</span>
            {' '}
            by
            <span>{book.author}</span>
            <button type="button" onClick={() => handleRemoveBook(book.item_id)}>Remove</button>
          </li>
        ))}
      </ul>

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

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Books;

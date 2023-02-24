import React from 'react';
import PropTypes from 'prop-types';

function Books(props) {
  const { books } = props;

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
            <button type="button">Remove</button>
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
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Books;

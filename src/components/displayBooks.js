import React from 'react';
import PropTypes from 'prop-types';

// Display incoming books
const DisplayBooks = ({ books, handleRemoveBook }) => (
  <div className="books-container">
    <ul>
      {books.map((book) => (
        <li key={`${book.title}-${book.author}`} className="book">
          <div className="books-info">
            <h4 className="book-category">{book.category}</h4>
            <h2 className="book-title">{book.title}</h2>
            <h6 className="book-author">{book.author}</h6>
            <div className="action-buttons-container">
              <button type="button" className="action-buttons">Comments</button>
              <div className="vertical-divider" />
              <button type="button" className="action-buttons" onClick={() => handleRemoveBook(book.item_id)}>Remove</button>
              <div className="vertical-divider" />
              <button type="button" className="action-buttons">Edit</button>
            </div>
          </div>
          <div className="progress-container">
            <div className="progress-circular-container">
              <div className="circular-progress" />
            </div>
            <div className="progress-percentage">
              <p className="percentage-completed">64%</p>
              <p className="completed">Completed</p>
            </div>
            <div className="progress-divider" />
            <div className="progress-chapter-container">
              <div className="current-chapter-container">
                <p className="current-chapter-label">CURRENT CHAPTER</p>
                <p className="current-chapter">Chapter 17</p>
              </div>
              <button className="primary-button" type="button">UPDATE PROGRESS</button>
            </div>
          </div>

        </li>
      ))}
    </ul>
  </div>
);

// Prop types validation
DisplayBooks.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default DisplayBooks;

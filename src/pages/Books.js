import React from "react";

function Books(props) {
  const { books } = props;

  return (
    <div>
      <h2>My Book List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <span>{book.title}</span> by <span>{book.author}</span>
            <button>Remove</button>
          </li>
        ))}
      </ul>
      <form>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Author:
          <input type="text" name="author" />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default Books;

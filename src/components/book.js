import React from "react";

const Book = (props) => {
    const { title, author } = props;

    return (
        <div>
            <h3>{title}</h3>
            <p>by {author}</p>
            <button>Remove</button>
        </div>
    );
};

export default Book
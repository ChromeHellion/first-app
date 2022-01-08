/*
    This is an un-named Export
*/

import React from "react";

const Book = props => {
    // const {imageLink, author, title} = props.propsBook;
    // Use The Above When Not using the ...(Spread operator).
    const {imageLink, author, title} = props;
    return (
        <article className="book">
            <img src={imageLink} alt="" />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <button type="button" onClick={() => console.log("Hello World")}>
                Inline Example
            </button>
        </article>
    );
};

export default Book;
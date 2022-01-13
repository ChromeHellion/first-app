import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Components
import {books} from "./Data/books.js"; // Named Export
import Book from "./Components/Book.js"; // Unnamed Export
// Comment Added

function BookList() {
    return (
        <section className="booklist">
            {books.map(book => {
                // Destructing The 'book'
                // const {imageLink, author, title} = book;
                // return <Book key = {book.id} propsBook={book} />;
                // We assign propsBook which becomes an object inside props
                // This might be confusing so we make use of ES6 syntax of JavaScript
                return <Book key={book.id} {...book} />;
            })}
        </section>
    );
}

ReactDom.render(<BookList />, document.getElementById("root"));

import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
    {
        id: 1,
        title: "The Monk Who Sold His Ferrari",
        author: "Robin Sharma",
        imageLink:
            "https://images-na.ssl-images-amazon.com/images/I/410BqHSamiL._SX322_BO1,204,203,200_.jpg",
    },
    {
        id: 2,
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        imageLink: "https://m.media-amazon.com/images/I/51u8ZRDCVoL._SY346_.jpg",
    },
];

const Book = props => {
    // const {imageLink, author, title} = props.propsBook;
    // Use The Above When Not using the ...(Spread operator).
    const {imageLink, author, title} = props;
    return (
        <article className="book">
            <img src={imageLink} alt="" />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

function BookList() {
    return (
        <section className="booklist">
            {books.map(book => {
                // Destructing The 'book'
                const {imageLink, author, title} = book;
                // return <Book key = {book.id} propsBook={book} />;
                // We assign propsBook which becomes an object inside props
                // This might be confusing so we make use of ES6 syntax of JavaScript
                return <Book key = {book.id} {...book} />;
            })}
        </section>
    );
}

ReactDom.render(<BookList />, document.getElementById("root"));

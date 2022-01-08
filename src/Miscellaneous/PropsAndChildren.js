import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Setup Vars
const firstBook = {
    title: "The Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    imageLink:
        "https://images-na.ssl-images-amazon.com/images/I/410BqHSamiL._SX322_BO1,204,203,200_.jpg",
};

const secondBook = {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    imageLink: "https://m.media-amazon.com/images/I/51u8ZRDCVoL._SY346_.jpg",
};

// The Book Component Can Be Created Like This Or Even Explictly
// function Book() {
//     return (
//         <section className="book">
//             <Image />
//             <Name />
//             <Author />
//         </section>
//     );
// }

// Can be Created Like This Too!
const Book = (props) => { /* can be directly destructured from here. {imageLink, author, title} */
    // To access this title in the JSX, use {}
    // const {imageLink, author, title} = props; Can be used like this to destructure props.
    return (
        <article className="book">
            <img src={props.imageLink} alt="" />
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
            {props.children}
        </article>
    );
};

function BookList() {
    return (
        <section className="booklist">
            <Book
                imageLink={firstBook.imageLink}
                author={firstBook.author}
                title={firstBook.title}
            >
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed dolorem
                    officiis quia modi error neque aut eum pariatur, voluptatum hic
                    commodi. Autem qui necessitatibus magni voluptatibus neque, at
                    cupiditate consequatur!
                </p>
            </Book>
            <Book
                imageLink={secondBook.imageLink}
                author={secondBook.author}
                title={secondBook.title}
            />
        </section>
    );
}

// ReactDom.render(<BookList />, document.getElementById("root"));
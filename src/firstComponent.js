import React from "react"; // ES6. Not React.
import ReactDom from "react-dom"; // Used For Rendering to index.html

// Standard Protocol For React To Know That A Function Is Special
// is By Capitalizing the First Letter Of The Name of The Function.

// Although, when exporting the component, you are supposed to use lower-case
// Only In the place where you are rendering it, you are supposed to create or import it
// as Upper Case.

function Greeting() {
  return <h1>Hello, This is My First Component</h1>;
}

// Now That We have created our component, we must add it to the
// index.html file in the public folder.

/*
    More Specifically, we want to inject the Greeting Component into the 
    Index.html's div which has the ID = 'root'

    To Help us achive this, we use a React Component called ReactDom
*/

/* 
    The ReactDom.render is looking for 2 things
    1. What we are Planning on rendering (Source)
    2. Where to render it. (Destination)

    Therefore The Syntax for Render is
    ReactDom.render(<Source />, Destination)
*/

ReactDom.render(<Greeting />, document.getElementById("root"));

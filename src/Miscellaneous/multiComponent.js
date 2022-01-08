import React from "react";
import ReactDom from "react-dom";
import {Greeting, Goodbye} from "./firstComponent"

function Test() {
    return (
        <div>
            <Greeting/>
            <ul>
                <li>
                    <a href="#">Nice</a>
                </li>
                <li>
                    <a href="#">Work</a>
                </li>
                <li>
                    <a href="#">Bro</a>
                </li>
            </ul>
            <Goodbye/>
            <br />
        </div>
    );
}

export default Test;

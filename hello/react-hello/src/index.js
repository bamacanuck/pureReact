import React from "react";
import ReactDOM from "react-dom";

function HelloWorld () {
    return (
        <div>hello, world...</div>
    );
}

// alternative form, below

// function HelloWorld () {
//     return React.createElement (
//         'div',
//         {},
//         "hello, world..."
//     );
// }

ReactDOM.render(
    <HelloWorld/>,
    document.querySelector("#root")
);
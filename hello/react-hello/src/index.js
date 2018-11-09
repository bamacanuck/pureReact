import React from "react";
import ReactDOM from "react-dom";

function HelloWorld () {
    return (
        <div>hello, world...</div>
    );
}

function HelloWorld () {
    return React.createElement (
        <div>hello, world...</div>
    );
}

ReactDOM.render(
    <HelloWorld/>,
    document.querySelector("#root")
);
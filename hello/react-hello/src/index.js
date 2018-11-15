import React from "react";
import ReactDOM from "react-dom";

// function HelloWorld () {
//     return (
//         <div>hello, world...</div>
//     );
// }

// alternative form, below

// function HelloWorld () {
//     return React.createElement (
//         'div',
//         {},
//         "hello, world..."
//     );
// }

// function HelloWorld () {
//     return React.createElement (
//         'div',
//         {},
//         "hello, world... ",
//         <br/>,
//         <br/>,
//         "here's another line(?) ...",
//         <br/>,
//         <br/>,
//         "hello, world... ",
//         <br/>,
//         <br/>,
//         "here's another line(?) ..."
//     );
// }

function HelloWorld () {
    return React.createElement (
        'div',
        {},
        "a",
        React.createElement (
            'div',
            {},
            <br/>,
            React.createElement (
                'div',
                {},
                "b",
                React.createElement (
                    'div',
                    {},
                    <br/>,
                    React.createElement (
                        'div',
                        {},
                        "hey now"
                    )
                
                )
            )
        )
    )
}


ReactDOM.render(
    <HelloWorld/>,
    document.querySelector("#root")
);
import React from "react";
import ReactDOM from "react-dom";

function HelloWorld () {
    return (
        <div>
            <Hello/><World/>(!)
        </div>
    );
}

function NameCells () {
    return (
        <>
            <td>first name</td>
            <td>last name</td>
        </>
    );
}

// function HelloWorld () {
//     return [<Hello/>,<World/>," (!)"];
// }

function Hello () {
    return (
        <span>hello, </span>
    );
}

function World () {
    return (
        <span>world </span>
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

// function HelloWorld () {
//     return React.createElement (
//         'div',
//         {},
//         "a",
//         React.createElement (
//             'div',
//             {},
//             <br/>,
//             React.createElement (
//                 'div',
//                 {},
//                 "b",
//                 React.createElement (
//                     'div',
//                     {},
//                     <br/>,
//                     React.createElement (
//                         'div',
//                         {},
//                         "c",
//                         React.createElement (
//                             'div',
//                             {},
//                             <br/>,
//                             React.createElement (
//                                 'div',
//                                 {},
//                                 "hey now"
//                             )
//                         )
//                     )
//                 )
//             )
//         )
//     )
// }

// function HelloWorld () {
//     return (
//         <div>
//             <div>
//                 <div>a</div>
//                 <br/>
//                 <div>b</div>
//                 <br/>
//                 <div>c</div>
//                 <br/>
//                 <div>d</div>
//                 <br/>
//                 <div>hey now</div>
//             </div>
//         </div>
//     );
// }

// function songName (props) {
//     return (
//         <span className="song-name">
//             {props.song.name}
//         </span>
//     );
// }


ReactDOM.render(
    <NameCells/>,
    document.querySelector("#root")
);
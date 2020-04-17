import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import IndecisionApp from "./indecisionApp";

// const Layout = (props) => {
//   return (
//     <div>
//       <p>header</p>
//       {props.content}
//       <p>footer</p>
//     </div>
//   );
// };

// const template = (
//   <div>
//     <h1>page title</h1>
//     <p>this is my page</p>
//   </div>
// );

ReactDOM.render(
  <React.StrictMode>
    <IndecisionApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

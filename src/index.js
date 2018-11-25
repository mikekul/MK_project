import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);

module.hot && module.hot.accept(); // jest opowiedzialne za wymianę apliacji w locie


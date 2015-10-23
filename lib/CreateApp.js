import React    from "react";
import ReactDOM from "react-dom";
import App      from "./App";

self.createApp = (container) => {
    ReactDOM.render(<App />, container);
}

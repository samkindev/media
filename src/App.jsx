import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { ChatInputMedia } from "./components/ChatInputMedia";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: media</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>

    <ChatInputMedia />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

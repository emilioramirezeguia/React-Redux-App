import React from "react";
import Joke from "./components/Joke";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <h1>
        How about some programming jokes?
        <span role="img" aria-label="emoji">
          😂
        </span>
      </h1>
      <Joke />
    </div>
  );
}

export default App;

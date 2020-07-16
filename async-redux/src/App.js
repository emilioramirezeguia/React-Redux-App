import React from "react";
import { connect } from "react-redux";
import { newJokes } from "./store/actions/actions";
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
      <button onClick={props.newJokes}>Another one</button>
    </div>
  );
}

export default connect(null, { newJokes })(App);

import React from "react";
import { connect } from "react-redux";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <h1>Hello from Redux Store {props.name}!</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};
export default connect(mapStateToProps, {})(App);

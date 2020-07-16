import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchJokes } from "../store/actions/actions";

function Joke(props) {
  useEffect(() => {
    props.fetchJokes();
  }, []);

  return (
    <div>
      {props.isLoading && <h4>Loading jokes...</h4>}
      {props.error && (
        <p className="error">Something happened... {props.error}</p>
      )}
      {props.jokes.length &&
        props.jokes.map((joke) => {
          return (
            <div className="joke" key={joke.id}>
              <h3>{joke.setup}</h3>
              <h4>{joke.punchline}</h4>
            </div>
          );
        })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    jokes: state.jokes,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchJokes })(Joke);

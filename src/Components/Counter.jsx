import React, { useContext } from "react";
import "./Counter.css";
import { DataContext } from "../context/DataContext";
export function Counter({ onIncrement, onDecrement }) {
  const { state, dispatch } = useContext(DataContext);
  return (
    <div className="counter-container">
      <h1>Counter :{state.number}</h1>
      <div className="btn-grps">
        <button
          onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}
          disabled={state.number === 10}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT", payload: 1})}
          disabled={state.number === 0}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

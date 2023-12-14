import { createContext, useReducer } from "react";

export const DataContext = createContext();
let initialState = {
  number: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, number: state.number + action.payload };
    case "DECREMENT":
      return { ...state, number: state.number - action.payload };
    default:
      return state;
  }
};
export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

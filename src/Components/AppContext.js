import React, { createContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPANSE":
      return {
        ...state,
        expanses: [...state.expanses, action.payload]
      };
    case "DELETE_EXPANSE":
      return {
        ...state,
        expanses: state.expanses.filter(
          (expanse) => expanse.id !== action.payload
        )
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload
      };
    default:
      return state;
  }
};
const initial = {
  budget: [],
  expanses: []
};
export const AppContext = createContext();
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expanses: state.expanses,
        dispatch
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

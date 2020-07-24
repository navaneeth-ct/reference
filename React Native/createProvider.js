import React, { createContext, useReducer } from 'react';

export default (initialState, reducer, actions) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};

    for (const action in actions) {
      boundActions[action] = actions[action](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

/*
  Actions
  -------
  - Actions must be functions that take in the `dispatch` function from a `useReducer` call
  - Actions must return a function that calls the `dispatch` function with a `action` object
  - const actions = { addItem: dispatch => () => dispatch({ type: ADD_ITEM, payload: item }) };
  - Each action in `actions` recieves the `dispatch` function in the `Provider` component
*/

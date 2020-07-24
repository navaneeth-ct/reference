/*
  Store
  -----
  - Manages all the state using reducers
  - dispatch, getState
*/
const store = Redux.createStore(reducer);
store.dispatch(action); // Dispatch an action to all the reducers in the store
store.getState(); // Gets the current state

/*
  Reducer
  -------
  - A function which gets the current state and an action object and returns the new state
  - It is run a single time when creating a store to initialize the state
  - combineReducers
*/
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_STATE':
      return [...state, action.payload];
    default:
      return state;
  }
};
Redux.combineReducers({
  reducer: () => []
}); // Combine one or more reducers to be passed into createStore()

/*
  Action
  ------
  - An object or a function that returns an object that is used to change the state in a specific way
*/
const setId = id => ({ payload: id, type: 'SET_ID' });

/*
  React Redux
  -----------
  - npm i redux react-redux
  - applyMiddleware, connect, createStore, Provider
*/
applyMiddleware(...middlewares);
createStore(reducers, initialState, applyMiddleware(...middlewares));
<Provider store={createStore(reducers)}>
  <App />
</Provider>;
connect(mapStateToProps, actionsObject)(CustomComponent);

/*
  Map state to props
  ------------------
  - `mapStateToProps` is a callback which will recieve the current state in the store and the props of the component
  - It returns an object of some selected values which will be passed as props to the component
*/
const mapStateToProps = (state, props) => ({
  isExpanded: state.post.id === props.post.id
});

/*
  Actions object
  --------------
  - The `actions` object has all the actions that returns an object to dispatch
  - Every action is bound as `store.dispatch(action)`
  - The action will be dispatched to every reducer in the store if called from the props of the component
*/

/*
  Asynchronous action creators
  ----------------------------
  - npm i redux-thunk
  - Asynchronous action creators returns a function that recieves `dispatch` as an argument
  - The action is dispatched manually after the asynchronous operation
*/
const signIn = (email, password) => dispatch =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => dispatch({ payload: user, type: 'SIGN_IN' }));

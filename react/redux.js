// npm install react-redux redux redux-devtools-extension redux-thunk

// Create a store
// It provides the state in the root reducer to mapStateToProps() in connect()
// store.js
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'react-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;

// Provide the store to App
// App.js
import {Provider} from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <SomeComponent />
  </Provider>
)

// Set up the root reducer (reducers/index.js)
// This is the state that is provided to the store and then to the component
// reducers/rootReducer.js
import {combineReducers} from 'redux';

import someReducer from './someReducer';

export default combineReducers({
  something: someReducer
});

// Set up a reducer which contains the state
// reducers/someReducer.js
import {SOME_TYPE, SOME_OTHER_TYPE} from '../actions/types';

const someState = {
  stateVariable: false,
  fetchedData: []
}

export default (state = someState, action) => {
  switch (action.type) {
    case SOME_TYPE:
      return {...state, stateVariable: true};
    case SOME_OTHER_TYPE:
      return {...state, fetchedData: [...state.fetchedData, action.payload]};
    default:
      return state;
  }
}

// Set up and export the actions that return the action object which will be passed to the reducer
// Alternatively it may return an async function that calls its dispatch argument with the action object
// actions/someActions.js
import {SOME_TYPE, SOME_OTHER_TYPE} from './types';

export const setStateVariable = () => ({type: SOME_TYPE});

export const fetchSomething = () => async dispatch => {
  const data = await fetch('/something').then(response => response.json());

  dispatch({type: SOME_OTHER_TYPE, payload: data});
}

// Use connect() to provide the state recieved from the store (which got it from the rootReducer) to the component
// components/SomeComponent.js
import {connect} from 'react-redux';
import {setStateVariable} from '../actions/someActions';

const SomeComponent = ({something, setStateVariable}) => {
  useEffect(() => { setStateVariable() }, []); // When run here from props, the reducer is called with the returned action

  return (<h1>{something}</h1>);
}

const mapStateToProps = state => ({
  something: state.something
});

export default connect(mapStateToProps, {setStateVariable})(SomeComponent);
// setStateVariable is changed to dispatch(setStateVariable()) and passed as props

// Complete structure
/*
store.js
actions
  someActions.js
  types.js
reducers
  index.js
  someReducer.js
*/

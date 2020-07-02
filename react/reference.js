/* Imports */
import React from 'react'
import PropTypes from 'prop-types'

React.Fragment // Renders a ghost element

React.createElement(elementName, attributesObject, childOrContent) // Creates a React element without JSX

/* Static properties */
React.Component
  React.Component.defaultProps = defaultPropsObject // Sets the default values for props
  React.Component.propTypes = propTypesObject       // Sets the prop types for prop validation

/* Instance properties */
React.Component.prototype
  React.Component.prototype.props // Gets all the props passed in to the component
  React.Component.prototype.state // Gets the local state of the component
  /* Methods */
  React.Component.prototype.setState(stateUpdatesObject) // Merges the state updates with the state and updates it
  /* Lifecycle methods */
  React.Component.prototype.componentDidMount() // Run after the component renders for the first time (can be async)
  React.Component.prototype.render()            // Renders the component

PropTypes // All the properties can be chained
  PropTypes.array
  PropTypes.bool
  PropTypes.func
  PropTypes.isRequired
  PropTypes.object
  PropTypes.string

(<Component style={styleObject} />) // Sets the inline styling of the component
(<Component key={uniqueKey} />)     // Sets a unique key for a list item generated with Array.prototype.map()
(<Component ref={refVariable} />)   // Sets the value of refVariable.current to the element 

/* Event handlers */
(<form onSubmit={handleSubmit}></form>)
(<button onClick={handleChange}></button>)
(<input onChange={handleChange} value={valueFromState} />)
(<input onChange={handleChange} value={type === 'male'} name="gender" value="male" type="radio" />) // Radio button
(<select value={valueFromState} onChange={event => setValueFromState(event.target.value)}>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>) // Select box
(<input type="checkbox" value={valueFromState} checked={valueFromState} onChange={event => setValueFromState(!valueFromState)} />) // Checkbox

/* Environmental variables */
.env.local // All environmental variables are stored here
  REACT_APP_VARIABLE_NAME='VALUE' // Can be accessed using process.env.REACT_APP_VARIABLE_NAME

/* Hooks */
React.useState(initialValue)                    // Returns an array with a local state variable and a function to change it
React.useEffect(() => {
  codeToRunOnComponentDidMountAnd/OrComponentDidUpdate
  return functionToRunOnComponentWillUnmount
  // eslint-disable-next-line /* disables any dependency warning */
}, arrayOfDependencies)                         // Mimics the behaviour of three lifecycle methods
React.useReducer(reducerFunction, initialState) // Returns a local state and a dispatch function
React.useContext(Context)                       // Returns the value of the context provided by Context.Provider
React.useRef(initialValue)                      // Returns a reference object whose value can be set to an element

/* Context */
// contexts
  // Context.js  // Creates a context object and exports it
    React.createContext(defaultValue) // The returned context will have a Provider component that can take a value prop
    
  // Provider.js // Exports a component that has all app state and renders its children inside the Context.Provider component
    const [state, dispatch] = React.useReducer(Reducer, initialState) // A reducer that will run on every call of dispatch
    (<Context.Provider value={state}>{props.children}</Context.Provider>)

  // Reducer.js  // Exports a function that takes in the current state and an action ({type, payload})
    export default (state, action) => {
      switch (action.type) {
        case type:
          return newState;
        default:
          return state;
      }
    }

// Working
// In the Provider, create a new state and dispatch function and subscribe it to a reducer using useReducer().
// On every dispatch(action) call, the reducer subscribed to that dispatch runs.
// The reducer gets the state subscribed to it and the action object of dispatch(action) as arguments.
// Based on the action.type and action.payload, the reducer returns a new state object which will change the state of the
// Provider.
// The Provider provides its state to all its children as the value of a Context.
// When the Provider's state change, the value of the Context change, hence re-renders the components that use its value.

// Class properties and methods
class HomePage extends React.Component {
  state = {}

  onClick = () => this.setState({})
}

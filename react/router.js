// npm install react-router-dom

/* Imports */
import {BrowserRouter, Link, Redirect, Route, Switch} from 'react-router-dom';

/* Switch */ // Renders a component in the place (the component rendered gets some props from Route)
(<Switch>
  <Route exact path='/' render={props => <Component {...props} />} /> {/* Use when you have to pass in props to Component */}
</Switch>)
(<Switch>
  <Route exact path='/' component={Component} />                      {/* Can't pass in additional props to component */}
</Switch>)

/* Link */ // Renders an anchor tag that'll change the route
(<Link to="/"></Link>)

/* Redirect */ // Redirects when rendered
(<Redirect to='/' />)

/* Props */ // The props passed into all rendered components inside Route
match = {
  params // The params of the URL (if URL is '/:userId', this.props.match.params.userId will be available in the component)
}

// Private routes
const PrivateRoute = ({component: Component, ...rest}) => {
  const {isLoading, isAuthenticated} = useContext(AuthContext);

  return (
    <Route {...rest} render={props => (
      !isLoading && !isAuthenticated
        ? <Redirect to='/login' />
        : <Component {...props} />
    )} />
  );
};

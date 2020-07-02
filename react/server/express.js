const app = express()
const router = express.Router()

Express.prototype
  Express.prototype.get(path, (request, response) => { /* ... */ })    // Handles a GET request to path
  Express.prototype.get(path, middlewareFunction, callback)            // Handles a GET request with a middleware
  Express.prototype.get(path, middlewaresArray, callback)              // Uses more than one middlewares
  Express.prototype.post(path, (request, response) => { /* ... */ })   // Handles a POST request to path
  Express.prototype.put(path, (request, response) => { /* ... */ })    // Handles a PUT request to path
  Express.prototype.delete(path, (request, response) => { /* ... */ }) // Handles a DELETE request to path
  Express.prototype.listen(port, callback)                             // Starts listening to requests on server
  Express.prototype.use([path], router)                                // Assigns the router to handle requests to the path

request
  request.body         // Contains the body of the request if parsed using express.json()
  request.header(name) // Gets a headers value
  request.params       // Gets the wildcard (parameter) values by name as an object

response
  response.json(javaScriptValue) // Sends a JSON response
  response.send(string)          // Sends a text response
  response.sendFile(path)        // Sends a file as response
  response.status(statusCode)

Router.prototype
  Router.prototype.get() // Same as Express.prototype.get() // Has other request methods of Express.prototype too

/* Routers */
// In index.js
app.use('/api/users', require('./routes/users')) // Uses the routes/users.js file for requests to /api/users

// In routes/user.js
router.get('/:id', (request, response) => { /* ... */ }) // Handles requests to /api/users/:id (not /:id)
module.exports = router;

/* Parse request body as JSON */
app.use(express.json({extended: false}))

/* Open a directory for serving static assets */
app.use(express.static('client/build'))

/* Middleware */
const middleware = (request, response, next) => {
  // do what you have to do
  request.user = jwt.verify(request.header('X-Auth-Token'), privateKey);

  if (!goodToGo) return response.json(errorMessage);
  
  next(); // Proceed with the request
};
module.exports = middleware;

// npm install bcryptjs config express express-validator jsonwebtoken mongoose

// npm install --save-dev concurrently nodemon

// package.json
({
  scripts: {
    start: 'node index.js',
    server: 'nodemon index.js'
  }
})

// Basic server
const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));

/* express-validator */
const {check, validationResult} = require('express-validator')

app.post('/users', [
  // Specify the validation checks
  check('username', 'Please enter a username.').not().isEmpty(),
  check('email', 'Please enter a valid email address').isEmail(),
  check('password', 'Please enter a password with more than 8 characters').isLength({min: 8})
], (request, response) => {
  // Validate the request and get the errors object
  const errors = validationResult(request);

  if (!errors.isEmpty()) // If errors object is not empty
    return response.status(400).json({errors: errors.array()}) // Send 400 response with errors

  // ...
});

app.post('/users', [auth,
  // With other middlewares
  [check('username', 'Please enter a username.').not().isEmpty()]
], (request, response) => {
  // ...
});

/* bcryptjs */
const bcrypt = require('bcryptjs');

const salt = await bcrypt.genSalt();
user.password = await bcrypt.hash(password, salt);

const isMatch = await bcrypt.compare(password, user.password);

/* jsonwebtoken */ // If callback is not specified, sign() and verify() will throw errors
const jwt = require('jsonwebtoken');

jwt.sign(payloadValue, secretKey, {expiresIn: 3600}, (error, token) => {
  if (error) throw error;
  
  response.send(token);
}); // Generates and sends a token

const payload = jwt.verify(token, secretKey); // Verifies a token with secretKey and gets its payload or throws error

/* config */
// It can get values from config -> default.json / production.json if in production mode
config.get('key')

/* concurrently */
// npx create-react-app client
// package.json
({
  "scripts": {
    "client": "npm start --prefix client", // Runs the start command in the client folder
    "dev": "concurrently \"npm run server\" \"npm run client\"" // Runs two commands concurrently to start client and server
  }
})
// client -> package.json
({
  "proxy": "http://localhost:5000"
})

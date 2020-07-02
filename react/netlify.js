// npm install --global netlify-cli

// /netlify.toml
[build]
  publish="build" // Specify the build folder

// Change local environmental variables to use the ones in server
let variableName;

if (process.env.NODE_ENV !== 'production')
  variableName = process.env.REACT_APP_VARIABLE_NAME // Value fetched from .env.local
else
  variableName = process.env.VARIABLE_NAME // Value fetched from the server environment

// netlify init

// Setting Netlify environmental variables
// Deploys -> Deploy settings -> Environment -> Environment variables

// npm run build

// netlify deploy --prod

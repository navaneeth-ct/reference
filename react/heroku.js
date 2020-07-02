// Install Heroku CLI

// Move config from default.json to production.json

// Add postbuild script to package.json
({"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"})

// Log in to Heroku
// heroku login

// Create application
// heroku create

// Commit to Git

// Add Heroku as a remote repository
// Heroku Dashboard -> Application -> Deploy -> Create a new Git repository

// Push to Heroku
// git push heroku master

/* To Update */

// Commit changes to Git
// Push to Heroku again

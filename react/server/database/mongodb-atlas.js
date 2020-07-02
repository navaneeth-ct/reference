// Create a new account

// Create a new project

// Create a new cluster

// Add a new user for the cluster (Atlas Configuration -> Security -> MongoDB Users -> Add New User)

// Whitelist IP address (Atlas Configuration -> Security -> IP Whitelist -> Add IP Address)

// Connect to Application
// Create config folder and inside default.json
// Store the global variables you want in it

// default.json
JSON.stringify({
  connectionString: 'mongoDbConnectionString'
})

// In config -> database.json
const config = require('config');
const mongoose = require('mongoose');

const connectionString = config.get('connectionString');

const connectDatabase = async () => {
  try {
    await mongoose.connect(connectionString, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true
    });

    console.log('Connected to database.')
  } catch (error) {
    console.error(error.message);

    process.exit(1);
  }
};

module.exports = connectDatabase;

// In index.js
const connectDatabase = require('./config/database');

const app = express();

connectDatabase();

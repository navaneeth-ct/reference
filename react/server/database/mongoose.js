const mongoose = require('mongoose');

await mongoose.connect(connectionSting, optionsObject) // Connects to a database
mongoose.Schema(objectWithRules)                       // Creates a set of rules for a model
mongoose.model(name, schema)                           // Creates a model with a name and schema

// Model methods
await Model.find(queryObject)                 // Returns an array of found instances based on query
await Model.find(queryObject).sort({createdAt: -1}) // Sort in descending createdAt order
await Model.findById(id)                      // Finds a model instance by id
await Model.findById(id).select('-fieldName') // Used to select only specified fields
await Model.findByIdAndUpdate(
  id, {$set: updatesObject}, {new: true}
)                                             // Finds an instance and updates it or creates it if it doesn't exist
await Model.findByIdAndRemove(id)             // Finds an instance and removes it
await Model.findOne(queryObject)              // Finds a model instance from database based on query object

await Model.prototype.save()     // Saves the model instance into the database and assigns it with data from database

// Examples
const User = mongoose.model('User', mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String,
    unique: true
  },
  createdAt: {
    default: Date.now,
    type: Date
  }
}));

module.exports = User;

// Relationships
const ContactSchema = mongoose.Schema({
  user: {
    ref: 'users', // Collection name
    type: mongoose.Schema.Types.ObjectId
  }
});

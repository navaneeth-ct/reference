/*
  Installation
  ------------
  - npm i bcrypt express jsonwebtoken mongoose nodemon
*/

/*
  MongoDB and Mongoose
  --------------------
  - Create or sign in to your MongoDB Cloud account
  - Create a cluster
  - Create a database user
  - Whitelist your IP address
  - Get your connection string
  - Connect to the database using Mongoose
  - Add listeners for the `connected` and `error` events
*/
mongoose.connect(connectionString, {
  useCreateIndex: true,
  useNewUrlParser: true
});
mongoose.connection.on('connected', () => console.log('✅ Database'));
mongoose.connection.on('error', error => console.error(error));

/*
  Creating models
  ---------------
  - Create a new schema
  - Create a model using that schema
*/
const pointSchema = new mongoose.Schema({
  coordinates: {
    accuracy: Number,
    altitude: Number,
    heading: Number,
    latitude: Number,
    longitude: Number,
    speed: Number
  },
  timestamp: Number
});
const userSchema = new mongoose.Schema({
  emailAddress: {
    required: true,
    type: String,
    unique: true
  },
  locations: [pointSchema],
  password: {
    required: true,
    type: String
  },
  type: {
    ref: 'Type',
    type: mongoose.Schema.Types.ObjectId
  }
});
mongoose.model('User', userSchema);

/*
  Using models
  ------------
  - Import the model in the entry file so it only runs once
  - Access the model using Mongoose
*/
require('./src/models/User');
const User = mongoose.model('User');

/*
  Model methods
  -------------
  - constructor, find, findById, findOne
*/
new User({ emailAddress, password });
User.find({ emailAddress });
User.findById(_id);
User.findOne({ emailAddress });

/*
  Model instance methods
  ----------------------
  - save
*/
user.save();

/*
  Request
  -------
  - headers
*/
request.headers;

/*
  Response
  --------
  - send, status
*/
response.send(data);
response.status(200);

/*
  JSON Web Tokens
  ---------------
  - sign, verify
*/
jwt.sign(payload, secret);
jwt.verify(token, secret, (error, payload) =>
  error ? console.error(error) : console.log(payload)
);

/*
  Password hashing and comparing
  ------------------------------
  - Create a pre-hook in the model
  - Generate a salt
  - Hash the password along with the salt
  - Create a method in the model to compare a password and the hash
*/
userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  bcrypt.genSalt(10, (error, salt) => {
    if (error) return next(error);
    bcrypt.hash(this.password, salt, (error, password) => {
      if (error) return next(error);
      this.password = password;
      next();
    });
  });
});
userSchema.methods.verifyPassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (error, isMatch) => {
      if (error) return reject(error);
      if (!isMatch) return reject(false);
      resolve(true);
    });
  });
};

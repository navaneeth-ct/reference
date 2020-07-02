/* Module -> Abstraction between every private variable */
const controller = (() => {
  let privateVariable;

  const privateFunction = () => console.log(privateVariable);

  return {publicFunction: () => privateFunction()};
})();

/* Revealing Module -> No abstraction between some private variables */
const controller = (() => {
  let privateVariable;

  const publicFunction = () => console.log(privateVariable);

  return {publicFunction};
})();

/* Singleton -> The same instance is returned on every constructor call */
const singleton = (() => {
  const instance;

  const createInstance = () => ({id: 1}); // Could be a class

  return {
    getInstance: () => {
      if (! instance) instance = createInstance();

      return instance;
    }
  }
})();

console.log(singleton.getInstance() === singleton.getInstance()); // true

/* Factory -> Creates a specific class' instance based on input */
function BasicMember(name) {
  this.name = name;
  this.cost = 10;
}

function PremiumMember(name) {
  this.name = name;
  this.cost = 20;
}

const factory = (() => {
  return {
    createMember: (type, name) => {
      const member;

      // Create different instances based on type
      switch (type) {
        case 'Basic':
          member = new BasicMember(name);
          break;
        case 'Premium':
          member = new PremiumMember(name);
      }

      // Assign properties which are common for both classes/objects
      member.type = type;
      member.cancelSubscription = () => { /* ... */  };

      return member;
    }
  };
})();

factory.createMember('Basic', 'John Doe').type; // Basic
factory.createMember('Premium', 'Jane Doe').type; // Premium

/* Observer -> Calls all from an array of functions when fired (Angular) */
class Observer {
  constructor() {
    this.observers = [];
  }

  // Adds a callback to the observers array that'll run when fired
  subscribe(callback) {
    this.observers.push(callback);
    console.log(`You are now subscribed to ${callback.name}.`);
  }

  // Removes a callback from the observers array
  unsubscribe(callback) {
    this.observers.filter(observer => observer !== callback);
    console.log(`You are now unsubscribed from ${callback.name}.`);
  }

  // Runs all the callbacks in the observers array
  fire() {
    this.observers.forEach(observer => observer());
  }
}

// Create a new observer instance
const clickObserver = new Observer();

// Subscribe a function to the observer on a subscribe button click
someSubscribeButton.addEventListener(
  'click', () => clickObserver.subscribe(someFunction)
);

// Unsubscribe a function from the observer on an unsubscribe button click
someUnsubscribeButton.addEventListener(
  'click', () => clickObserver.unsubscribe(someFunction)
);

// Fire all subscribed functions on the observer
fireButton.addEventListener('click', () => clickObserver.fire());

/* Mediator -> Colleagues register and communicates through a mediator */
class Mediator {
  constructor() {
    this.colleagues = {};
  }

  // Registers a new colleague to the list of colleagues
  register(colleague) {
    this.colleagues[colleague.name] = colleague;
  }

  // Accepts a message from a collegue and makes another colleague recieve it
  send(message, sender, reciever) {
    if (reciever) this.colleagues[reciever].recieve(message, sender);
    else {
      // Makes every colleague recieve the message if no reciever was specified
      for (name in this.colleagues) {
        if (name !== sender)
          this.colleagues[name].recieve(message, sender);
      }
    }
  }
}

class Colleague {
  constructor(name) {
    this.name = name;
    this.mediator = null;
  }

  // Sends a message to the a mediator
  send(message, reciever) {
    this.mediator.send(message, this.name, reciever);
  }

  // Recieves a message from the mediator
  recieve(message, sender) {
    console.log(`${sender} -> ${this.name}: ${message}`);
  }
}

// Instantiate a mediator
const mediator = new Mediator();

// Instantiate few colleagues
const johnDoe = new Colleague('John Doe');
const janeDoe = new Colleague('Jane Doe');

// Register the new colleagues with the mediator
mediator.register(johnDoe);
mediator.register(janeDoe);

// Send and recieve messages
johnDoe.send('Hello!', 'Jane Doe');
janeDoe.send('Hola!');

/* State -> The current state of the UI is stored in a state variabel */
function State() {
  let currentState = null;

  // Instantiating this function with new is the same as returning an object
  // with the below methods from a normal function call (Module Pattern)

  // Initialize the current state
  this.initialize = function (InitialState) {
    this.changeState(InitialState);
  };

  // Change the current state as well as the UI by running the constructor
  this.changeState = function (State) { currentState = new State(); };

  // Get the current state
  this.getState = function () { console.log(currentState); };
}

// Constructor that when called will change the UI and be the new state
function Home() {
  this.name = 'Home';

  document.body.innerHTML = '<h1>Home</h1>';
}

function About() {
  this.name = 'About';

  document.body.innerHTML = '<h1>About</h1>';
}

// Initialize a new state
const pageState = new State();
pageState.initialize(Home);

// Change the state and UI on link clicks
homeLink.addEventListener('click', () => pageState.changeState(Home));
aboutLink.addEventListener('click', () => pageState.changeState(About));

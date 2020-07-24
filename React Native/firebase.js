/*
  Set up
  ------
  - Create a new project
  - Go to the `Auth` section and select an authentication method
  - npm i firebase
*/

/*
  Methods
  -------
  - auth
    - createUserWithEmailAndPassword
    - signInWithEmailAndPassword
    - signOut
  - database
    - ref
      - on
      - push
      - set
  - initializeApp, onAuthStateChanged
*/
firebast.auth();
firebase.auth().createUserWithEmailAndPassword(email, password);
firebase.auth().signInWithEmailAndPassword(email, password);
firebase.auth().signOut();
firebase.database().ref(`/users/${uid}/employees`).push({ email, name, shift });
firebase
  .database()
  .ref(`/users/${uid}/employees`)
  .on('value', snapshot => console.log(snapshot.val()));
firebase
  .database()
  .ref(`/users/${uid}/employees/${employee.uid}`)
  .set({ email, name, shift });
firebase.initializeApp(
  apiKey,
  authDomain,
  databaseURL,
  messagingSenderId,
  storageBucket
);
firebase.onAuthStateChanged(user =>
  console.log(user ? 'Logged In' : 'Not logged in')
);

/*
  Rules
  -----
  ({
    "rules": {
      "users": {
        "$uid": {
          '.read': '$uid === auth.uid',
          '.write': '$uid === auth.uid'
        }
      }
    }
  });
*/

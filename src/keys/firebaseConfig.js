import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'; 
  const firebaseConfig = {
    apiKey: "AIzaSyBuEgI1oevIk-z3yfKJUHP4iwoePupcuQg",
    authDomain: "folkschat-86e17.firebaseapp.com",
    projectId: "folkschat-86e17",
    storageBucket: "folkschat-86e17.appspot.com",
    messagingSenderId: "438626215482",
    appId: "1:438626215482:web:ee782c8c31bb9544fb7703"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database =  firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { auth, provider, timestamp};
export default database;
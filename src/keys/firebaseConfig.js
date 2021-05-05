import firebase from "firebase/app";

  const firebaseConfig = {
    apiKey: "AIzaSyBuEgI1oevIk-z3yfKJUHP4iwoePupcuQg",
    authDomain: "folkschat-86e17.firebaseapp.com",
    projectId: "folkschat-86e17",
    storageBucket: "folkschat-86e17.appspot.com",
    messagingSenderId: "438626215482",
    appId: "1:438626215482:web:ee782c8c31bb9544fb7703"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider};
export default database;
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDiqYLU8zbWzoduvf0Pg9bRwMF7YX41nVU",
  authDomain: "todo-app-aa.firebaseapp.com",
  databaseURL: "https://todo-app-aa.firebaseio.com",
  projectId: "todo-app-aa",
  storageBucket: "todo-app-aa.appspot.com",
  messagingSenderId: "42699890632",
  appId: "1:42699890632:web:e820bf0b9600e298c3aafd",
  measurementId: "G-PYPSB9BSJV",
});

const db = firebaseApp.firestore();

export default db;

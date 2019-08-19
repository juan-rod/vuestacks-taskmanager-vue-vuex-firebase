// firebase.js
import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
});

export const db = app.firestore();
export const todosCollection = db.collection('todos');

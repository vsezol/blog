import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5XrNUhSM4_1KAe8UI02gnQqGJ0q0z95g",
  authDomain: "jsc-blog.firebaseapp.com",
  databaseURL: "https://jsc-blog.firebaseio.com",
  projectId: "jsc-blog",
  storageBucket: "jsc-blog.appspot.com",
  messagingSenderId: "1074091326792",
  appId: "1:1074091326792:web:4fc42122e7f111ccb4077d",
  measurementId: "G-5JTPJ4GH7Z",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
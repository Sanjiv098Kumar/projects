// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDu0QiDxFpK5UEVUp7SQ4leBM_zGdHkVpI",
    authDomain: "reels-sanjiv.firebaseapp.com",
    projectId: "reels-sanjiv",
    storageBucket: "reels-sanjiv.appspot.com",
    messagingSenderId: "948674973138",
    appId: "1:948674973138:web:aad2b7bd21ee2de09c8c0b"
  };
firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();

const firestore = firebase.firestore();

export const database={
  users : firestore.collection('users'),
  posts : firestore.collection('posts'),
  comments : firestore.collection('comments'),
  getTimestamp: firebase.firestore.FieldValue.serverTimestamp
}

export const storage=firebase.storage()
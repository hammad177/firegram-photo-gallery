/** @format */

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyBYYFKbRDAO9YRsUtralpoOGnA_83kunUE',
  authDomain: 'firegram-photo-gallery-163dd.firebaseapp.com',
  projectId: 'firegram-photo-gallery-163dd',
  storageBucket: 'firegram-photo-gallery-163dd.appspot.com',
  messagingSenderId: '713495587008',
  appId: '1:713495587008:web:578ad0010fee437ecc6525'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCpfn9Peb18uWJeNhZshEHFren793u13Sg",
    authDomain: "jules--blog-site.firebaseapp.com",
    databaseURL: "https://jules--blog-site.firebaseio.com",
    projectId: "jules--blog-site",
    storageBucket: "jules--blog-site.appspot.com",
    messagingSenderId: "211969266997",
    appId: "1:211969266997:web:be29cc73a15a27d4cbe87c",
    measurementId: "G-MP8FN0ZZ6W"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });
  firebase.analytics();

  export default firebase;
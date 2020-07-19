import * as firebase from 'firebase';

var config = {
  // apiKey: "AIzaSyBeEjOxCuuiwze9mFEg-zofOSVbQ8_Qc7A",
  // authDomain: "jupviec-8e2e0.firebaseapp.com",
  // databaseURL: "https://jupviec-8e2e0.firebaseio.com",
  // projectId: "jupviec-8e2e0",
  // storageBucket: "jupviec-8e2e0.appspot.com",
  // messagingSenderId: "55679236058",
  // appId: "1:55679236058:web:62bbfc74b8ffa8a96cf2e3",
  // measurementId: "G-CKX276EC63"
  apiKey: "AIzaSyBEkclFU1o-M8GUmKbD5efhwKYKQiol7ow",
  authDomain: "jupviecdatn.firebaseapp.com",
  databaseURL: "https://jupviecdatn.firebaseio.com",
  projectId: "jupviecdatn",
  storageBucket: "jupviecdatn.appspot.com",
  messagingSenderId: "644775602494",
  appId: "1:644775602494:web:16ae6ebb219d625a55646f",
  measurementId: "G-0T283691HH"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const firebaseApp = firebase;

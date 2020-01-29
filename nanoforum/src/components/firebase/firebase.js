import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCJfGnxvVtd9ISTOYyfRskmbD0HHJ6W-ek",
  authDomain: "nano-forum.firebaseapp.com",
  databaseURL: "https://nano-forum.firebaseio.com",
  projectId: "nano-forum",
  storageBucket: "nano-forum.appspot.com",
  messagingSenderId: "654722490313",
  appId: "1:654722490313:web:cad0f52c8b427e99659218",
  measurementId: "G-2FVXBE56M1"
};

firebase.initializeApp(firebaseConfig)

export default firebase;
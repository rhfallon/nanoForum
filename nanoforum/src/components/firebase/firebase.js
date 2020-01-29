import app from 'firebase/app';
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

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;
import firebase from "firebase";
//authentication
import "firebase/auth";
//realtime database
import "firebase/database";
//storage
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDAVQRFabjg8CnB_PxX1GATEXKOUOWkNIk",
  authDomain: "netflix-970fc.firebaseapp.com",
  projectId: "netflix-970fc",
  storageBucket: "netflix-970fc.appspot.com",
  messagingSenderId: "292922042587",
  appId: "1:292922042587:web:5607b96d44473d07e104fe"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
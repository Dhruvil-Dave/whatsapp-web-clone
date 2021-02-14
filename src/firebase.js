import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  /*apiKey: "AIzaSyAmHj0wQq9x4kv7q-WjjlqD4d2F5UyaeB8",
  authDomain: "whatsapp-web-clone-de82b.firebaseapp.com",
  databaseURL: "https://whatsapp-web-clone-de82b-default-rtdb.firebaseio.com",
  projectId: "whatsapp-web-clone-de82b",
  storageBucket: "whatsapp-web-clone-de82b.appspot.com",
  messagingSenderId: "915930393862",
  appId: "1:915930393862:web:690d8d6e3862c34b388287",
  measurementId: "G-RVBHMV1958"*/
  
  apiKey: "AIzaSyBEIedtfWi-Y_mikQ6MLWRSIHyHz9d1VaQ",
  authDomain: "whatsapp-web-clone-545f1.firebaseapp.com",
  projectId: "whatsapp-web-clone-545f1",
  storageBucket: "whatsapp-web-clone-545f1.appspot.com",
  messagingSenderId: "164038628640",
  appId: "1:164038628640:web:7e2b54529af1cf44b3b345",
  measurementId: "G-FQZ2QF3TBM"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
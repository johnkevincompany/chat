import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyARxQZuy25JtxLfryLfVN6ZGmISk-HGqr0",
    authDomain: "whatsapp-b0afc.firebaseapp.com",
    projectId: "whatsapp-b0afc",
    storageBucket: "whatsapp-b0afc.appspot.com",
    messagingSenderId: "135867843831",
    appId: "1:135867843831:web:869bbedbe98c7e3f773ff2"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };
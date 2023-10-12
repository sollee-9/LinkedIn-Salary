import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDwbWu55ikENwXFCJlpH9JdS6_5pD1IgcM",
    authDomain: "linkedin-clone-e1ade.firebaseapp.com",
    projectId: "linkedin-clone-e1ade",
    storageBucket: "linkedin-clone-e1ade.appspot.com",
    messagingSenderId: "751373741195",
    appId: "1:751373741195:web:5e4a3f6960bbb22040788e"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// firebase API key
const config = {
        apiKey: "AIzaSyA-GSZDCQo08MfrBZSh4qWW17LhlBqF4Oc",
        authDomain: "crwn-db-9635e.firebaseapp.com",
        databaseURL: "https://crwn-db-9635e.firebaseio.com",
        projectId: "crwn-db-9635e",
        storageBucket: "crwn-db-9635e.appspot.com",
        messagingSenderId: "731536235518",
        appId: "1:731536235518:web:da62d6d9bc806f9487feaf",
        measurementId: "G-KRMWP2DY9F"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setting up Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
// targetting the google pop up when the google auth provider is called for sign in
provider.setCustomParameters({ prompt: 'select_account' });
// Sign in with google method
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
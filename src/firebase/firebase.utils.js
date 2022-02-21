
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyA00NvZfhlhbnTrUzXhrT7ELuxmMADyikc",
    authDomain: "crwn-db-e8d15.firebaseapp.com",
    projectId: "crwn-db-e8d15",
    storageBucket: "crwn-db-e8d15.appspot.com",
    messagingSenderId: "202165140912",
    appId: "1:202165140912:web:d7d107351e3ae8c420aa75",
    measurementId: "G-K414DPXZN9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firesotre = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
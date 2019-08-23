import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBF1tm28uU2y9BbqcSb_OwxyrOa0YJ91jI",
  authDomain: "jbox-db.firebaseapp.com",
  databaseURL: "https://jbox-db.firebaseio.com",
  projectId: "jbox-db",
  storageBucket: "",
  messagingSenderId: "748520127813",
  appId: "1:748520127813:web:5e9aac481acfe481"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

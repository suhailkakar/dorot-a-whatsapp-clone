import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCRHT-fzPyvTn8G2tdq59P_bUVMCG6oukY",
    authDomain: "whatsapp-clone-3cf11.firebaseapp.com",
    projectId: "whatsapp-clone-3cf11",
    storageBucket: "whatsapp-clone-3cf11.appspot.com",
    messagingSenderId: "64651792115",
    appId: "1:64651792115:web:feb9edf1f14f03ccfd7186"

};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore();
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}

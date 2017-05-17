import firebase from 'firebase'
import firebaseui from 'firebaseui'

const config = {
  apiKey: <API KEY>,
  authDomain: <AUTH DOMAIN>,
  databaseURL: <DATABASE URL>,
  projectId: <PROJECT ID>,
  storageBucket: <STORAGE BUCKET>,
  messagingSenderId: <MESSAGING SENDER ID>
}
export const fb = firebase.initializeApp(config)
export const db = fb.database()
export const fbUI = new firebaseui.auth.AuthUI(firebase.auth(fb))

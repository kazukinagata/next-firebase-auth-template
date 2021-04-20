import firebase from 'firebase/app'
import firebaseConfig from './config';
import 'firebase/auth'
import 'firebase/firestore'


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth()
const firestore = firebase.firestore()

export { auth, firestore }
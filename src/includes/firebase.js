import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyC4zqIsyTKwkpxUd9DLxTogylHP360gCow',
  authDomain: 'music-21a27.firebaseapp.com',
  projectId: 'music-21a27',
  storageBucket: 'music-21a27.appspot.com',
  // messagingSenderId: "23452200398",
  appId: '1:23452200398:web:fb9a45fd8e6cfdcb458f9f'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, storage, usersCollection, songsCollection, commentsCollection }

import firebase from 'firebase/app'
import 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyAucGQfiqW6ts6xlEDDKLvf_RBpzfY8SQs",
  authDomain: "mybook-17d76.firebaseapp.com",
  databaseURL: "https://mybook-17d76.firebaseio.com",
  projectId: "mybook-17d76",
  storageBucket: "mybook-17d76.appspot.com",
  messagingSenderId: "281808501677",
  appId: "1:281808501677:web:e4f7330c9aedfb80123f24",
  measurementId: "G-7QR89H86ZF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase
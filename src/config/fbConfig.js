import firebase from 'firebase/app' // import library-base features
import 'firebase/firestore' // import database functionality
import 'firebase/auth' // import authentication
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAzSASxHWxj2nd3Fi9-xOoNydQzkAtrV9M",
  authDomain: "supermariontaskmanager.firebaseapp.com",
  databaseURL: "https://supermariontaskmanager.firebaseio.com",
  projectId: "supermariontaskmanager",
  storageBucket: "supermariontaskmanager.appspot.com",
  messagingSenderId: "75996711963"
};

firebase.initializeApp(config);

firebase.firestore().settings({ //
  timestampsInSnapshots:true
})

export default firebase;
import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyCk_7ZBfbLKPUkRYMppxbF7ZZGzkGSG4oM",
    authDomain: "unichat-48d8b.firebaseapp.com",
    projectId: "unichat-48d8b",
    storageBucket: "unichat-48d8b.appspot.com",
    messagingSenderId: "765329860003",
    appId: "1:765329860003:web:5b5355805cb73378cee616"
}).auth();
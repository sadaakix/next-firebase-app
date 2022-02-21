import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDGU9xruRWltNZIzeHt_fLf1N-JrjDI_bg",
  authDomain: "nextapp-6a999.firebaseapp.com",
  projectId: "nextapp-6a999",
  storageBucket: "nextapp-6a999.appspot.com",
  messagingSenderId: "920413794765",
  appId: "1:920413794765:web:dd2fcbaccf89970dda9484",
  measurementId: "G-V84HFNST9K"
}

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}



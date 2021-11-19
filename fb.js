// Chaves de conexão com Firebase.com
/*
LEMBRE-SE de trocar essa chaves pelas disponibilizadas pelo SEU
firebase.com.
*/

const firebaseConfig = {
    apiKey: "AIzaSyBpR5xAw120TFtbmHSZ9YSyKED7Plf3lxY",
    authDomain: "bullseye-c9759.firebaseapp.com",
    projectId: "bullseye-c9759",
    storageBucket: "bullseye-c9759.appspot.com",
    messagingSenderId: "188610488210",
    appId: "1:188610488210:web:0bc4ed05a92d88b712434b"
  };
  
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
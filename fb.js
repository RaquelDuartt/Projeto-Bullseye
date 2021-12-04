/**
 * fb.js
 * 
 * Created by André Luferat → http://www.luferat.net/
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 * 
 * Chaves e métodos de conexão com o serviço Firebase → https://firebase.com/
 * 
 * LEMBRE-SE de trocar essa chaves pelas disponibilizadas pelo SEU firebase.com. * 
 */

const firebaseConfig = {
    apiKey: "AIzaSyA0mCk3AQwP5htp541aZtfEES1ZTdU-iBE",
    authDomain: "bullseye-2e0b1.firebaseapp.com",
    projectId: "bullseye-2e0b1",
    storageBucket: "bullseye-2e0b1.appspot.com",
    messagingSenderId: "1070259322748",
    appId: "1:1070259322748:web:5663f0c936b6f18922eef9"
};

// Inicializa Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

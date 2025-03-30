// firebase.js
const firebaseConfig = {
    apiKey: "AIzaSyDICQBbnrTrBdI9NgseuE5kHx3IfdkYmG4",
    authDomain: "utts-6d6dd.firebaseapp.com",
    projectId: "utts-6d6dd",
    storageBucket: "utts-6d6dd.firebasestorage.app",
    messagingSenderId: "744743669172",
    appId: "1:744743669172:web:3d0fed0b495c72a6acb6e1",
  };
  
  // Inicializa Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  
  // Exponer Firebase y Storage a nivel global
  window.firebase = firebase;
  window.storage = storage;
  


  
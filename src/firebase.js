import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDFPOEapzE2otnYAjcgGRf-gc7tbK0MX00',
//   authDomain: 'starbucks-clone.firebaseapp.com',
//   projectId: 'starbucks-clone',
//   storageBucket: 'starbucks-clone.appspot.com',
//   messagingSenderId: '852007719923',
//   appId: '1:852007719923:web:4c57f4ef9782f81026f886',
// }
const firebaseConfig = {
  apiKey: 'AIzaSyCrY7EX0MSvqjt53OWBu7s_BAJo3hNY4y0',
  authDomain: 'twitter-d547f.firebaseapp.com',
  projectId: 'twitter-d547f',
  storageBucket: 'twitter-d547f.appspot.com',
  messagingSenderId: '772879385350',
  appId: '1:772879385350:web:6f6725b90e24e223b31487',
  measurementId: 'G-6FXJ1CJZP7',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };

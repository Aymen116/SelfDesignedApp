import firebase from 'firebase';
require('@firebase/firestore');


const firebaseConfig = {
  apiKey: "AIzaSyCQfmQON7amWGYc3epc3rEKndjqZqe3aNM",
  authDomain: "tshirt-customiser.firebaseapp.com",
  databaseURL:"https://tshirt-customiser-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "tshirt-customiser",
  storageBucket: "tshirt-customiser.appspot.com",
  messagingSenderId: "871505203881",
  appId: "1:871505203881:web:4acc2ab4af0afe02838fb8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
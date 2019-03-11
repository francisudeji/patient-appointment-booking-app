import firebase from "firebase"

const config = {
  apiKey: "AIzaSyBrWzzxSy4ETiRh1E84qfdlWhTCzvPHsps",
  authDomain: "patient-doctor-booking-system.firebaseapp.com",
  databaseURL: "https://patient-doctor-booking-system.firebaseio.com",
  projectId: "patient-doctor-booking-system",
  storageBucket: "patient-doctor-booking-system.appspot.com",
  messagingSenderId: "911036404223"
};

!firebase.apps.length && firebase.initializeApp(config)
const auth = firebase.auth()
const database = firebase.firestore()
export { auth, database }

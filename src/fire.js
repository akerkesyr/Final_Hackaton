import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAdkQlu7VVv3UDf7YPnAWHfpAgxO03a1Pw",
  authDomain: "akerke-finalhackaton.firebaseapp.com",
  projectId: "akerke-finalhackaton",
  storageBucket: "akerke-finalhackaton.appspot.com",
  messagingSenderId: "268643700247",
  appId: "1:268643700247:web:4c0444cfc4e15530ba5652",
  measurementId: "G-YY73DRRD0L"
};


const fire = firebase.initializeApp(firebaseConfig);
export default fire   ;
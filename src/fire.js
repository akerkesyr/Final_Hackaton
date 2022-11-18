import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyADcmf1xRPn4g1W2V3SbvYnBG7XADmQL1Y",
  authDomain: "akerke-final-hackaton.firebaseapp.com",
  projectId: "akerke-final-hackaton",
  storageBucket: "akerke-final-hackaton.appspot.com",
  messagingSenderId: "543750756430",
  appId: "1:543750756430:web:80777d34fa140d496ecb1f"
};


const fire = firebase.initializeApp(firebaseConfig);
export default fire   ;
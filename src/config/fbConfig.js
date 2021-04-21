import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyASak1Tm4rt3zaCtxAzUhCnNq4xNm4BmvI",
  authDomain: "marioplan-main.firebaseapp.com",
  projectId: "marioplan-main",
  storageBucket: "marioplan-main.appspot.com",
  messagingSenderId: "94164734057",
  appId: "1:94164734057:web:53cd2d6c7fd55f8c86d2f8",
  measurementId: "G-FTEXX2GNTZ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timeStampsInSnapshots: true });

export default firebase;

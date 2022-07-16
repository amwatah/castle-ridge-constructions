
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBM9kDMgnWijwwlLnyTlXIrX9LZDrb_IPo",
  authDomain: "castle-ridge.firebaseapp.com",
  projectId: "castle-ridge",
  storageBucket: "castle-ridge.appspot.com",
  messagingSenderId: "1078326365673",
  appId: "1:1078326365673:web:57be1f827db72ce5f74f78",
  measurementId: "G-SKJPWR9NE6"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


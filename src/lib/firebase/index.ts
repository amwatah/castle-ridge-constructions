
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_eG901MhT-pletE3IH9ZtnGouD97mJk0",
  authDomain: "castle-rigdge-construction.firebaseapp.com",
  projectId: "castle-rigdge-construction",
  storageBucket: "castle-rigdge-construction.appspot.com",
  messagingSenderId: "48766259167",
  appId: "1:48766259167:web:7b2d8894d8f5f261697e6a",
  measurementId: "G-T8M3B6YFYR"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


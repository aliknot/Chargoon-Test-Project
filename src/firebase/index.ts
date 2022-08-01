import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp,
  updateDoc
} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs1cpCd3-uPko0PnM-Bf4Mcm1ZXczUA4Q",
  authDomain: "employmentproject-302bd.firebaseapp.com",
  projectId: "employmentproject-302bd",
  storageBucket: "employmentproject-302bd.appspot.com",
  messagingSenderId: "1005370091445",
  appId: "1:1005370091445:web:8ab499be2bad3f77b89bfc"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
export const collectionRef = collection(db, 'Users');
export function getDoc(id: string) {
	const docRef = doc(db, 'Users', id)
	return docRef;
}

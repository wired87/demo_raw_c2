
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
// todo firebase ui im hinterkopf behalten


const firebaseConfig = {
    apiKey: "AIzaSyCdFi3p3pkWK9UkZc0xrceQIkyzQdNLa24",
    authDomain: "bestbrain-39ce7.firebaseapp.com",
    projectId: "bestbrain-39ce7",
    storageBucket: "bestbrain-39ce7.appspot.com",
    messagingSenderId: "68303113625",
    appId: "1:68303113625:web:eef53bfe025dd482add708",
    measurementId: "G-WD3S9Y98MR"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(FIREBASE_APP);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNjtasPcZVFR5pgvfULaAZGVywmFfDGbY",
  authDomain: "data-analytics-86dde.firebaseapp.com",
  databaseURL: "https://data-analytics-86dde-default-rtdb.firebaseio.com",
  projectId: "data-analytics-86dde",
  storageBucket: "data-analytics-86dde.appspot.com",
  messagingSenderId: "454452012206",
  appId: "1:454452012206:web:2579bf8963edb40e04793f"
};
const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const auth = getAuth(app);

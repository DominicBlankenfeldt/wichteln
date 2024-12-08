import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4SxW8MUtEpenG67uOjOKhesW-rn4H-xM",
  authDomain: "losomat-cd6ed.firebaseapp.com",
  projectId: "losomat-cd6ed",
  storageBucket: "losomat-cd6ed.firebasestorage.app",
  messagingSenderId: "1037443908429",
  appId: "1:1037443908429:web:e743d883503609618e2d04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;

createApp(App).use(store).use(router).mount("#app");

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyByTJsV3ljV7w3uIMl4xNQWWNsFVz5_M6Y",
  authDomain: "easylogin-b1252.firebaseapp.com",
  projectId: "easylogin-b1252",
  storageBucket: "easylogin-b1252.appspot.com",
  messagingSenderId: "173418334006",
  appId: "1:173418334006:web:abdf1f719026928c079597",
  measurementId: "G-PR0D1BRKFK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
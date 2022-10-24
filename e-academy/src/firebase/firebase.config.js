// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyC9Kd_gtsE6ffU9-CTlC4j2F_lx_l5ZtxE",
//   authDomain: "e-academy-ea184.firebaseapp.com",
//   projectId: "e-academy-ea184",
//   storageBucket: "e-academy-ea184.appspot.com",
//   messagingSenderId: "521471071506",
//   appId: "1:521471071506:web:89f7a5ad9320a7f67f4fcb",

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
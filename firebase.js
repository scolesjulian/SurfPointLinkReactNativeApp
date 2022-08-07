import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyANmthkeKsIpyq9cqTkfa8EQ_f1qZo78JY",
  authDomain: "surfpointlinkreactnative.firebaseapp.com",
  projectId: "surfpointlinkreactnative",
  storageBucket: "surfpointlinkreactnative.appspot.com",
  messagingSenderId: "414423796029",
  appId: "1:414423796029:web:411d49c90a191ac994dd54",
  measurementId: "G-JY97MH29RK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();


export {
    auth
}
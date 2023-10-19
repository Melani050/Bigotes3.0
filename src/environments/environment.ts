// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from "src/environments/environment.prod";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk90Im6jdoc6BWst4UsrP8jJ3vZmBgZtQ",
  authDomain: "bigotes30-fd737.firebaseapp.com",
  projectId: "bigotes30-fd737",
  storageBucket: "bigotes30-fd737.appspot.com",
  messagingSenderId: "866053511091",
  appId: "1:866053511091:web:b1767b06a557d2cf18ddc6",
  measurementId: "G-XF5KMT7V14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export { environment };

import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuTGhHuMVZT0q_6mU3dhV2AEOnEgpHqCU",
  authDomain: "caramel-laboratory.firebaseapp.com",
  projectId: "caramel-laboratory",
  storageBucket: "caramel-laboratory.appspot.com",
  messagingSenderId: "387933244599",
  appId: "1:387933244599:web:9a74de18fc177245869132",
  measurementId: "G-CDP6TCDV6P"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { app };


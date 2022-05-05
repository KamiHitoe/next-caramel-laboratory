
// Initialize the FirebaseUI Widget using FirebaseUI.auth
import * as firebase from "firebase/app";
import * as firebaseui from "firebaseui";
// import firebaseui from "firebaseui";
// import { app } from "@/plugins/firebase";


// const firebaseui = require('firebaseui');
// const firebase = require('firebase');

// let ui = new firebaseui.auth.AuthUI(firebase.default.auth());
let ui = new firebaseui.auth.AuthUI(firebase.auth());


const Login = () => {
  return (
    <div>
      <h1 className="subtitle">Login page</h1>
      <p>here is Firebase Auth</p>
    </div>
  )
};

export default Login;

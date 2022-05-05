import { app } from "@/plugins/firebase";
import { 
  getAuth,
  EmailAuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
// import firebaseui from "firebaseui";

const firebaseui = require('firebaseui');
// const firebase = require('firebase');

// let ui = new firebaseui.auth.AuthUI(firebase.default.auth());
const ui = new firebaseui.auth.AuthUI(getAuth(app));

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
    FacebookAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID,
    TwitterAuthProvider.PROVIDER_ID,
  ],
  // Other config options...
});

const Login = () => {
  return (
    <div>
      <h1 className="subtitle">Login page</h1>
      <p>here is Firebase Auth</p>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  )
};

export default Login;

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyA54uKwEEMDZxDTigbBd197WEoxiTodPUQ",
  authDomain: "crwn-app-f6cbe.firebaseapp.com",
  projectId: "crwn-app-f6cbe",
  storageBucket: "crwn-app-f6cbe.appspot.com",
  messagingSenderId: "804029725553",
  appId: "1:804029725553:web:bda52559bfa41d673d94d0",
  measurementId: "G-W3GBM0E75H",
};

const firebaseApp = initializeApp(config);

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    //This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // ...
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  }
};

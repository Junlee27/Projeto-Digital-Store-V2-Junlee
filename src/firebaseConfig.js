import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDfpd91OQaqLX2opx9rViZLPrQwT4JHOGk",
  authDomain: "digitalcollege-ca00a.firebaseapp.com",
  projectId: "digitalcollege-ca00a",
  storageBucket: "digitalcollege-ca00a.appspot.com",
  messagingSenderId: "1043845180788",
  appId: "1:1043845180788:web:2e08ebbf9c9171924c9021",
  measurementId: "G-W7LEC50NZJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.error(error);
    });
};

export { auth, signInWithGoogle };

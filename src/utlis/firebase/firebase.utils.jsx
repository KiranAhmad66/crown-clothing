import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD0StMCyCjfVvv34KFASGbE3KWUd2bxTJE",
  authDomain: "crwn-clothing-ffcd3.firebaseapp.com",
  projectId: "crwn-clothing-ffcd3",
  storageBucket: "crwn-clothing-ffcd3.appspot.com",
  messagingSenderId: "1002368494484",
  appId: "1:1002368494484:web:fe34b78408459f50973d81",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.getCustomParameters({ prompt: "selec_account" });
export const SignInWithPopup = () => auth.signInWithPopup(provider);
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = db.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userDocRef.get();
  console.log(userSnapshot.exists);
  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userDocRef.set({
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error(error);
    }
  }
  return userDocRef;
};
export default firebase;
export const CreateUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await auth.createUserWithEmailAndPassword(email, password);
};
export const SignInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await auth.signInWithEmailAndPassword(email, password);
};

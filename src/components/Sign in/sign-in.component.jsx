import { async } from "@firebase/util";
import {
  createUserDocumentFromAuth,
  SignInWithPopup,
} from "../../utlis/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithPopup();
    const docUserRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page </h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
    </div>
  );
};
export default SignIn;

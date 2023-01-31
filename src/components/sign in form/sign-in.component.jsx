import { useState } from "react";
import FormInput from "../form input/form-input.component";
import "./sign-in.styles.scss";
import Button from "../button/button.component";
import {
  createUserDocumentFromAuth,
  CreateUserWithEmailAndPassword,
  SignInUserWithEmailAndPassword,
  SignInWithPopup,
} from "../../utlis/firebase/firebase.utils";
const defaultFormField = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [formField, setState] = useState(defaultFormField);
  const { email, password } = formField;
  const resetFormField = () => {
    setState(defaultFormField);
  };
  const signinWithGoogle = async () => {
    const { user } = await SignInWithPopup();
    await createUserDocumentFromAuth(user);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await SignInUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormField();
    } catch (error) {
      if (error.code === "auth/wrong-password")
        return alert("Your Password Is Incorrect");
      console.log(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...formField, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already Have An Account?</h2>
      <span>Sign in With Your Email And Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <div className="button-containers">
          <Button type="submit">Sign In</Button>
          <Button buttonType={"google"} onClick={signinWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;

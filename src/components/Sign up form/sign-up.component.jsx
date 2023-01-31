import { useState } from "react";
import FormInput from "../form input/form-input.component";
import "./sign-up.styles.scss";
import Button from "../button/button.component";
import {
  createUserDocumentFromAuth,
  CreateUserWithEmailAndPassword,
} from "../../utlis/firebase/firebase.utils";
const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formField, setState] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formField;
  const resetFormField = () => {
    setState(defaultFormField);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return;
    try {
      const { user } = await CreateUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...formField, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't Have An Account?</h2>
      <span>Sign Up With Your Email And Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
export default SignUp;

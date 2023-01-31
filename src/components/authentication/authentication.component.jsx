import SignUp from "../Sign up form/sign-up.component";
import SignIn from "../sign in form/sign-in.component";
import "./authentication.styles.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default Authentication;

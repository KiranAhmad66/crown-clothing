import { Route, Routes } from "react-router-dom";
import Home from "./components/route/homepage/homepage.component";
import Navigation from "./components/route/Navigation/navigation.component";
import SignIn from "./components/Sign in/sign-in.component";
const Shop = () => {
  return <div>Hello i am store</div>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;

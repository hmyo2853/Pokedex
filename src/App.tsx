import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import MyPukimon from "./page/MyPukimon";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignIn";
import "./sass/App.sass";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypukimon" element={<MyPukimon />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

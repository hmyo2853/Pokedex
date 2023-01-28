import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import MyPukimon from "./page/MyPukimon";
import "./sass/App.sass";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypukimon" element={<MyPukimon />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

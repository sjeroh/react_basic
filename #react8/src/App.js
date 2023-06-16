import "./App.css";
import HomePage from "./pages/HomePage";
import HelpPage from "./pages/HelpPage";
import Contact from "./pages/Contact";
import Aboutpage from "./pages/Aboutpage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="menu">
        <ul>
          <li>
            <Link to={"/"}>홈페이지</Link>
          </li>
          <li>
            <Link to={"/contact"}>컨텍트</Link>
          </li>
          <li>
            <Link to={"/about"}>어바웃</Link>
          </li>
          <li>
            <Link to={"/help"}>헬프</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* 패스 경로는 내맘대로 적어도 된다. */}
        <Route path="/about" element={<Aboutpage />}></Route>
        <Route path="/help" element={<HelpPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

import "./styles.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import UserContent from "./Components/UserContent";
import UserData from "./Components/UserData";
import SignIn from "./Components/SignIn";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Content" element={<UserContent />} />
        <Route path="/UserData" element={<UserData />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

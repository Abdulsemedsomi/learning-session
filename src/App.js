import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Connect from "./Pages/Connect";
import Jobs from "./Pages/Jobs";
import Me from "./Pages/Me";
import "./Assets/Style.css";
import Notification from "./Pages/Notification";
import Messaging from "./Pages/Messaging";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Connect" element={<Connect />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Me" element={<Me />} />
        <Route path="/Notifications" element={<Notification />} />
        <Route path="/Messages" element={<Messaging />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

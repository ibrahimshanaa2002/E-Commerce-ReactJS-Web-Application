import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./Pages/Hero/Hero";
import LogIn from "./Pages/LogIn/LogIn";
import Banner from "./components/banner/Banner";
import Login from "./components/Login/Login";
library.add(fas);

function App() {
  return (
    <BrowserRouter>
      <Banner />
      {/* <Navbar /> */}
      <Login />
      <Routes>
        {/* <Route path="/" element={<Hero />} /> */}
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

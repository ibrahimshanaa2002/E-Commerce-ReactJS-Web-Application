import "./App.css";
import Navbar from "./components/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Pages/Hero/Hero";
import { useState } from "react";
import Banner from "./components/banner/Banner";
library.add(fas);

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

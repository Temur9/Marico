import React from "react";
import { Route, Routes } from "react-router";
import './App.scss'
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
    </Routes>
    </>
  );
};

export default App;

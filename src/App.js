import React from "react";
import { Route, Routes } from "react-router";
import './App.scss'
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import SignUp from "./components/SignUp/SignUp";
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/logIn" element={<Login/>}/>
    </Routes>
    </>
  );
};

export default App;
